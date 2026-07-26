# Script to populate real sports cars into d:\sketching\assets\cars
$srcDir = 'C:\Users\ProBro\Downloads\bandar\New folder'
$destDir = 'd:\sketching\assets\cars'

if (-not (Test-Path $destDir)) { New-Item -ItemType Directory -Force -Path $destDir | Out-Null }

# Clear current cartoon files in assets/cars
Remove-Item "$destDir\*" -Force -ErrorAction SilentlyContinue

$carFiles = Get-ChildItem $srcDir -File | Where-Object { 
    $_.Name -match 'Car|Bugatti|Lamborghini|McLaren|Audi|BMW|Ferrari|Pagani|Skyline|Rolls|Race|download|coloring' -and $_.Extension -match '\.(jpg|jpeg|webp|png)$'
}

Write-Host "Found $($carFiles.Count) real car files."

$idx = 1
foreach ($f in $carFiles) {
    $ext = $f.Extension.ToLower()
    $destPath = Join-Path $destDir "car-$idx$ext"
    Copy-Item $f.FullName $destPath -Force
    Write-Host "Car ${idx}: $($f.Name) -> car-$idx$ext"
    $idx++
}

Write-Host "Real cars populated successfully!"
