$content = Get-Content 'd:\sketching\js\sketchCatalog.js' -Raw

# Match all preset arrays
$regex = '(?s)const\s+([A-Z_]+_PRESETS)\s*=\s*(\[.*?\]);'
$matches = [regex]::Matches($content, $regex)

$allSketches = @()
$presetsMap = [ordered]@{}

foreach ($m in $matches) {
    $presetName = $m.Groups[1].Value
    $rawArray = $m.Groups[2].Value
    
    # Replace unquoted JS keys with quoted JSON keys and single quotes with double quotes
    $jsonString = $rawArray -replace '(?m)^\s*([a-zA-Z0-9_]+):', '"$1":'
    $jsonString = $jsonString -replace "'", '"'
    
    try {
        $items = $jsonString | ConvertFrom-Json
        $presetsMap[$presetName] = $items
        foreach ($item in $items) {
            $allSketches += $item
        }
        Write-Host "Successfully parsed $presetName : $($items.Count) items"
    } catch {
        Write-Host "Could not parse $presetName directly: $_"
    }
}

$masterData = [ordered]@{
    title = "SketchTrace Master Sketches Catalog"
    totalSketches = $allSketches.Count
    updatedAt = (Get-Date).ToString("yyyy-MM-dd HH:mm:ss")
    sketches = $allSketches
    presetsMap = $presetsMap
}

$jsonOutput = $masterData | ConvertTo-Json -Depth 10
[System.IO.File]::WriteAllText('d:\sketching\all_sketches.json', $jsonOutput, [System.Text.Encoding]::UTF8)
Write-Host "Exported all $($allSketches.Count) sketches to d:\sketching\all_sketches.json successfully!"
