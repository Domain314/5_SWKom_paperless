#!/bin/bash

# Change the path to the absolute path of your 'Frontend_App' folder
app_path="./"

# 1. Open app folder and run 'npm run start'.
konsole --new-tab --noclose -e "bash -c 'cd $app_path && npm run start'" &

# 2. Open app folder and run 'firebase serve --only hosting'
konsole --new-tab --noclose -e "bash -c 'cd $app_path && firebase serve --only hosting'" &

# 3. Open app folder with vscodium
vscodium "$app_path" &

# 4. Wait for Firebase server to start
while ! curl -s --head --fail http://localhost:5000; do
    echo "Waiting for Firebase server..."
    sleep 1
done

# 5. Start BrowserSync
konsole --new-tab --noclose -e "bash -c 'cd $app_path && browser-sync start --proxy \"localhost:5000\" --files \"public/assets/scripts/*\" --reload-delay 200'" &

# 6. Start firefox with url 'http://localhost:3000/'
firefox 'http://localhost:3000/' &

# Disown the firefox process so it remains open even if the terminal is closed
disown %firefox

# Close the terminal window
#exit
