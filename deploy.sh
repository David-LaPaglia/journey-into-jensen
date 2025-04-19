#!/bin/bash

# Create .nojekyll file to disable Jekyll processing
touch public/.nojekyll

# Build and deploy the project to GitHub Pages
npm run predeploy && npm run deploy
