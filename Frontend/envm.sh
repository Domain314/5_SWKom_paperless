 #!/bin/bash

# Change the path to the absolute path of your 'Frontend_App' folder
app_path="./"

# 1. Open folder 'Frontend_App' and run 'npm run start'.
osascript -e 'tell application "Terminal" to do script "cd '$app_path' && npm run start"' &

# 2. Open folder 'Frontend_App' and run 'firebase serve --only hosting'
osascript -e 'tell application "Terminal" to do script "cd '$app_path' && firebase serve --only hosting"' &

# 3. Open folder 'Frontend_App' with Visual Studio Code
open -a "Visual Studio Code" "$app_path" &

# 4. Wait for Firebase server to start
while ! curl -s --head --fail http://localhost:5000; do
    echo "Waiting for Firebase server..."
    sleep 1
done

# 5. Start BrowserSync
osascript -e 'tell application "Terminal" to do script "cd '$app_path' && browser-sync start --proxy \"localhost:5000\" --files \"public/assets/scripts/*\" --reload-delay 200"' &

# 6. Start Safari with url 'http://localhost:3000/'
open -a Safari 'http://localhost:3000/' &

# Close the Terminal window if needed
#osascript -e 'tell application "Terminal" to quit'
