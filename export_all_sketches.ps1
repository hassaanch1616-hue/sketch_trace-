# Export all sketch catalog presets into a single all_sketches.json file in d:\sketching
$catalogFile = 'd:\sketching\js\sketchCatalog.js'
$content = Get-Content $catalogFile -Raw

# Extract CATEGORIES and preset arrays using regex or JS execution
$script = @"
var window = { SketchTrace: {} };
$content
var allPresets = [];
if (window.SketchTrace.sketchCatalog) {
    var cat = window.SketchTrace.sketchCatalog;
    var categories = cat.CATEGORIES;
    var presets = [].concat(
        cat.CAR_PRESETS || [],
        cat.ANIME_PRESETS || [],
        cat.AIRCRAFT_PRESETS || [],
        cat.CARTOON_PRESETS || [],
        cat.BIKE_PRESETS || [],
        cat.TRAIN_PRESETS || [],
        cat.SUPERHERO_PRESETS || [],
        cat.SHIP_PRESETS || [],
        cat.FISH_PRESETS || [],
        cat.ANIMAL_PRESETS || [],
        cat.BIRD_PRESETS || []
    );
    console.log(JSON.stringify({ total: presets.length, categories: categories, sketches: presets }, null, 2));
}
"@

# Write temporary JS and run via mshta or cscript if available, or parse via regex in PowerShell
$matches = [regex]::Matches($content, '(?s)const\s+([A-Z_]+_PRESETS)\s*=\s*(\[.*?\]);')
$allData = @{}
$allSketches = @()

foreach ($m in $matches) {
    $varName = $m.Groups[1].Value
    $jsonText = $m.Groups[2].Value
    
    # Convert JS object syntax to valid JSON (quoting unquoted keys)
    $cleanJson = $jsonText -replace "(?m)^\s*([a-zA-Z0-9_]+):", '"$1":' -replace "'", '"'
    try {
        $arr = $cleanJson | ConvertFrom-Json
        $allData[$varName] = $arr
        $allSketches += $arr
    } catch {
        Write-Host "Failed to parse $varName with ConvertFrom-Json, using Regex extractor"
    }
}

Write-Host "Parsed total sketches count:" $allSketches.Count
