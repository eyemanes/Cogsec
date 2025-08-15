#!/bin/bash

echo "🔍 JSON Validation Test"
echo "======================"

echo "Testing vercel.json..."
if python3 -m json.tool vercel.json > /dev/null 2>&1; then
    echo "✅ vercel.json is valid JSON"
else
    echo "❌ vercel.json has JSON syntax errors"
fi

echo ""
echo "Testing package.json..."
if python3 -m json.tool package.json > /dev/null 2>&1; then
    echo "✅ package.json is valid JSON"
else
    echo "❌ package.json has JSON syntax errors"
fi

echo ""
echo "Testing manifest.json..."
if python3 -m json.tool public/manifest.json > /dev/null 2>&1; then
    echo "✅ manifest.json is valid JSON"
else
    echo "❌ manifest.json has JSON syntax errors"
fi

echo ""
echo "Current vercel.json content:"
echo "----------------------------"
cat vercel.json
