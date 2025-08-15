@echo off
echo 🚀 Cogsec Vercel Deployment Helper
echo ==================================

:: Check if we're in the right directory
if not exist "package.json" (
    echo ❌ Error: package.json not found. Please run this from the cogsec directory.
    pause
    exit /b 1
)

:: Check if Vercel CLI is installed
where vercel >nul 2>nul
if %errorlevel% neq 0 (
    echo 📦 Installing Vercel CLI globally...
    npm install -g vercel
)

echo.
echo 🔍 Pre-deployment checks...

:: Check for required files
echo ✅ Checking vercel.json...
if exist "vercel.json" (echo    Found) else (echo    ❌ Missing)

echo ✅ Checking public assets...
if exist "public\logo.png" (echo    Logo found) else (echo    ⚠️  Logo missing)
if exist "public\Banner.png" (echo    Banner found) else (echo    ⚠️  Banner missing)
if exist "public\gallery" (echo    Gallery folder found) else (echo    ⚠️  Gallery missing)

echo ✅ Checking React components...
if exist "src\App.js" (echo    App.js found) else (echo    ❌ App.js missing)

echo.
echo 🛠️  Building project locally first...
npm run build

if %errorlevel% equ 0 (
    echo ✅ Local build successful!
    echo.
    echo 🌐 Ready for Vercel deployment!
    echo.
    echo Next steps:
    echo 1. Push your code to GitHub:
    echo    git add .
    echo    git commit -m "Deploy Cogsec to Vercel"
    echo    git push
    echo.
    echo 2. Deploy to Vercel:
    echo    vercel --prod
    echo.
    echo Or visit https://vercel.com to deploy via web interface
) else (
    echo ❌ Build failed! Please fix errors before deploying.
    pause
    exit /b 1
)

pause
