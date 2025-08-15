#!/bin/bash

echo "🚀 Starting Cogsec Development Server..."
echo "🔐 Initializing Neural Security Protocols..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js from https://nodejs.org/"
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm."
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

echo "🔥 Launching Cogsec..."
echo "🌐 Opening http://localhost:3000"
echo "🛡️ Neural firewalls active. Cognitive security enabled."

# Start the development server
npm start
