#!/bin/bash

# Get the current script's directory
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"

# Open terminal and run "npm run startm"
osascript -e "tell application \"Terminal\" to do script \"cd '$SCRIPT_DIR' && npm run startm\""

# Open terminal and run "firebase serve --only hosting"
osascript -e "tell application \"Terminal\" to do script \"cd '$SCRIPT_DIR' && firebase serve --only hosting\""

# Open terminal and run "browser-sync start --config bs-config.js"
osascript -e "tell application \"Terminal\" to do script \"cd '$SCRIPT_DIR' && sudo browser-sync start --config bs-config.js\""

echo "All terminals opened!"
