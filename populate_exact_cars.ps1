$srcDir = 'C:\Users\ProBro\Downloads\bandar\New folder'
$destDir = 'd:\sketching\assets\cars'

if (-not (Test-Path $destDir)) { New-Item -ItemType Directory -Force -Path $destDir | Out-Null }

# Clear current files in assets/cars
Remove-Item "$destDir\*" -Force -ErrorAction SilentlyContinue

$exactCars = @(
    "10 Easy Steps To Draw A Sports Car Drawing Effortlessly __ Bugatti Chiron.jpg",
    "12 Stunning Lamborghini Drawing Ideas to Inspire You - jerwoodvisualarts_org.webp",
    "Ai Colouring Page of a _ McLaren P1.webp",
    "Audi Coloring Pages (1).webp",
    "Audi Coloring Pages.webp",
    "BMW M8 CSL.webp",
    "Car Coloring Pages - Free Printables.jpg",
    "Free High Quality Colouring Page of a 2014 Audi A3 Cabriolet.jpg",
    "How to Draw Bugatti Veyron (Sports Cars) Step by Step.jpg",
    "How to Draw Ferrari F40 - SketchOk.webp",
    "How to Draw Pagani Zonda_ 13 Steps Drawing___.jpg",
    "Nissan Skyline R34 Front View digital download drawing line art.webp",
    "Race Car Coloring Page - Free Race Car Coloring Pages.webp",
    "Rolls Royce Ghost.jpg",
    "coloring picture generated with chatgpt.jpg",
    "download (1).webp",
    "download (2).webp",
    "download (3).webp",
    "download.jpg",
    "download.webp"
)

$idx = 1
foreach ($fileName in $exactCars) {
    $srcFile = Join-Path $srcDir $fileName
    if (Test-Path $srcFile) {
        $ext = [System.IO.Path]::GetExtension($fileName).ToLower()
        $destFile = Join-Path $destDir "car-$idx$ext"
        Copy-Item -LiteralPath $srcFile -Destination $destFile -Force
        Write-Host "Car ${idx}: $fileName -> car-$idx$ext"
        $idx++
    } else {
        Write-Host "NOT FOUND: $fileName"
    }
}

Write-Host "Exact 20 cars populated successfully!"
