@echo off
echo 🚀 Starting Cogsec Development Server...
echo 🔐 Initializing Neural Security Protocols...

:: Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

:: Check if npm is installed
where npm >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ npm is not installed. Please install npm.
    pause
    exit /b 1
)

:: Install dependencies if node_modules doesn't exist
if not exist "node_modules" (
    echo 📦 Installing dependencies...
    npm install
)

echo 🔥 Launching Cogsec...
echo 🌐 Opening http://localhost:3000
echo 🛡️ Neural firewalls active. Cognitive security enabled.

:: Start the development server
npm start

pause
