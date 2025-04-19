#!/bin/bash

# Build the React app
echo "Building React app..."
npx react-scripts build

# Ensure .nojekyll file exists in build folder
echo "Creating .nojekyll file..."
touch build/.nojekyll

# Clear existing docs folder and move build to docs
echo "Moving build to docs folder..."
rm -rf docs
mv build docs

echo "Build complete! Your app is ready in the /docs folder."