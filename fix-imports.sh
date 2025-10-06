#!/bin/bash

# Fix all import statements by removing version numbers
find src/components/ui -name "*.tsx" -exec sed -i '' 's/@[0-9]\+\.[0-9]\+\.[0-9]\+//g' {} \;
