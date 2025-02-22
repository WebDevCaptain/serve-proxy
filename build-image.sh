#!/bin/bash

# Remove dist folder
rm -rf dist

# Build
cd vue-sample
npm run build
mv dist ../
cd ../

# Build image
docker build -t serveproxy -f server.Dockerfile .