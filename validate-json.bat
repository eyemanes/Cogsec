@echo off
echo 🔍 JSON Validation Test
echo ======================

echo Testing vercel.json...
node -e "JSON.parse(require('fs').readFileSync('vercel.json', 'utf8')); console.log('✅ vercel.json is valid JSON')" 2>nul
if %errorlevel% neq 0 (
    echo ❌ vercel.json has JSON syntax errors
)

echo.
echo Testing package.json...
node -e "JSON.parse(require('fs').readFileSync('package.json', 'utf8')); console.log('✅ package.json is valid JSON')" 2>nul
if %errorlevel% neq 0 (
    echo ❌ package.json has JSON syntax errors
)

echo.
echo Testing manifest.json...
node -e "JSON.parse(require('fs').readFileSync('public/manifest.json', 'utf8')); console.log('✅ manifest.json is valid JSON')" 2>nul
if %errorlevel% neq 0 (
    echo ❌ manifest.json has JSON syntax errors
)

echo.
echo Current vercel.json content:
echo ----------------------------
type vercel.json

pause
