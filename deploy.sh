#!/bin/bash

echo "🚀 Cogsec Vercel Deployment Helper"
echo "=================================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this from the cogsec directory."
    exit 1
fi

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI globally..."
    npm install -g vercel
fi

echo ""
echo "🔍 Pre-deployment checks..."

# Check for required files
echo "✅ Checking vercel.json..." 
[ -f "vercel.json" ] && echo "   Found" || echo "   ❌ Missing"

echo "✅ Checking public assets..."
[ -f "public/logo.png" ] && echo "   Logo found" || echo "   ⚠️  Logo missing"
[ -f "public/Banner.png" ] && echo "   Banner found" || echo "   ⚠️  Banner missing"
[ -d "public/gallery" ] && echo "   Gallery folder found" || echo "   ⚠️  Gallery missing"

echo "✅ Checking React components..."
[ -f "src/App.js" ] && echo "   App.js found" || echo "   ❌ App.js missing"

echo ""
echo "🛠️  Building project locally first..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Local build successful!"
    echo ""
    echo "🌐 Ready for Vercel deployment!"
    echo ""
    echo "Next steps:"
    echo "1. Push your code to GitHub:"
    echo "   git add ."
    echo "   git commit -m 'Deploy Cogsec to Vercel'"
    echo "   git push"
    echo ""
    echo "2. Deploy to Vercel:"
    echo "   vercel --prod"
    echo ""
    echo "Or visit https://vercel.com to deploy via web interface"
else
    echo "❌ Build failed! Please fix errors before deploying."
    exit 1
fi
