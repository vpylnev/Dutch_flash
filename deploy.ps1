# Author: Valentin Pylnev
# Created: 2025-2026

# Deployment script for Dutch Flashcards
# Usage: .\deploy.ps1 "Your commit message"

param(
    [Parameter(Mandatory=$true)]
    [string]$CommitMessage
)

Write-Host "`nStep 1: Updating timestamp..." -ForegroundColor Cyan
.\update_timestamp.ps1

Write-Host "`nStep 2: Staging changes..." -ForegroundColor Cyan
git add .
$status = git status --short
if ($status) {
    Write-Host $status -ForegroundColor Gray
} else {
    Write-Host "No changes to commit" -ForegroundColor Yellow
    exit
}

Write-Host "`nStep 3: Committing..." -ForegroundColor Cyan
git commit -m $CommitMessage

Write-Host "`nStep 4: Pushing to GitHub..." -ForegroundColor Cyan
git config http.sslVerify false
git push
git config --unset http.sslVerify

Write-Host "`nDeployment complete!" -ForegroundColor Green
Write-Host "Your changes will be live at: https://vpylnev.github.io/Dutch_flash/" -ForegroundColor Green

