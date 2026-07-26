$srcDir = 'C:\Users\ProBro\Downloads\animals\chacha'
$destDir = 'd:\sketching\assets\superheroes'

if (-not (Test-Path $destDir)) { New-Item -ItemType Directory -Force -Path $destDir | Out-Null }

# Clear current mixed up files in assets/superheroes
Remove-Item "$destDir\*" -Force -ErrorAction SilentlyContinue

$heroFiles = Get-ChildItem -LiteralPath $srcDir -File | Where-Object { $_.Extension -match '\.(jpg|jpeg|webp|png)$' }

Write-Host "Found $($heroFiles.Count) real superhero files in source folder."

$idx = 1
foreach ($f in $heroFiles) {
    $ext = $f.Extension.ToLower()
    $destFile = Join-Path $destDir "superhero-$idx$ext"
    Copy-Item -LiteralPath $f.FullName -Destination $destFile -Force
    Write-Host "Superhero ${idx}: $($f.Name) -> superhero-$idx$ext"
    $idx++
}

Write-Host "Real Superheroes populated successfully!"
