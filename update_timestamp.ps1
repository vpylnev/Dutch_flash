# Author: Valentin Pylnev
# Created: 2025-2026

# Script to update the last modified timestamp in index.html before commit
# This ensures the timestamp reflects the actual time of code changes on GitHub

$timestamp = Get-Date -Format "MMMM dd, yyyy 'at' HH:mm"
$indexFile = "index.html"

if (Test-Path $indexFile) {
    $content = Get-Content $indexFile -Raw -Encoding UTF8
    
    # Update the timestamp line
    $pattern = 'Last updated: <span id="last-update-time">.*?</span>'
    $replacement = "Last updated: <span id=`"last-update-time`">$timestamp</span>"
    
    $newContent = $content -replace $pattern, $replacement
    
    if ($content -ne $newContent) {
        $newContent | Set-Content $indexFile -Encoding UTF8 -NoNewline
        Write-Host "Timestamp updated to: $timestamp" -ForegroundColor Green
    } else {
        Write-Host "No timestamp found to update" -ForegroundColor Yellow
    }
} else {
    Write-Host "index.html not found" -ForegroundColor Red
}

