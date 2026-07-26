$tempDir = 'C:\Users\ProBro\.gemini\antigravity-ide\brain\fd116b43-6deb-4572-b632-3545309a9828\.tempmediaStorage'
$carsDir = 'd:\sketching\assets\cars'

if (-not (Test-Path $carsDir)) { New-Item -ItemType Directory -Force -Path $carsDir | Out-Null }

# Cars were generated around 2026-07-25 20:45 to 21:00
$carFiles = Get-ChildItem $tempDir | Where-Object { $_.LastWriteTime -ge [datetime]'2026-07-25 20:40' -and $_.LastWriteTime -le [datetime]'2026-07-25 21:05' }

Write-Host "Found $($carFiles.Count) car media files in temp storage."

$idx = 1
foreach ($f in $carFiles) {
    $ext = $f.Extension.ToLower()
    $dest = Join-Path $carsDir "car-$idx$ext"
    Copy-Item $f.FullName $dest -Force
    Write-Host "Car ${idx}: $($f.Name) -> car-$idx$ext"
    $idx++
}

Write-Host "Cars restored successfully!"
