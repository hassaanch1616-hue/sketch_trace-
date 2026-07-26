$catalogPath = 'd:\sketching\js\sketchCatalog.js'
$catalog = Get-Content $catalogPath -Raw

$regex = "imageUrl:\s*['`"]([^'`"]+)['`"]"
$matches = [regex]::Matches($catalog, $regex)

$missingCount = 0
$foundCount = 0

foreach ($m in $matches) {
    $url = $m.Groups[1].Value
    $absPath = $url.Replace('./', 'd:\sketching\').Replace('/', '\')
    
    if (Test-Path $absPath) {
        $foundCount++
    } else {
        # Try fixing extension
        $dir = [System.IO.Path]::GetDirectoryName($absPath)
        $fileNoExt = [System.IO.Path]::GetFileNameWithoutExtension($absPath)
        
        if (Test-Path $dir) {
            $alt = Get-ChildItem $dir -File | Where-Object { [System.IO.Path]::GetFileNameWithoutExtension($_.Name) -eq $fileNoExt } | Select-Object -First 1
            if ($alt) {
                $dirName = [System.IO.Path]::GetFileName($dir)
                $correctUrl = "./assets/$dirName/$($alt.Name)"
                $catalog = $catalog.Replace("'$url'", "'$correctUrl'")
                Write-Host "Fixed URL extension: $url -> $correctUrl"
                $foundCount++
            } else {
                Write-Host "MISSING: $url"
                $missingCount++
            }
        }
    }
}

[System.IO.File]::WriteAllText($catalogPath, $catalog, [System.Text.Encoding]::UTF8)
Write-Host "Verification Complete!"
Write-Host "Found: $foundCount"
Write-Host "Missing: $missingCount"
