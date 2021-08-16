# Sporcle-Smashed
A simple auto-answering script for any typed game on sporcle
## Useage
### Loading/installing the script
There are two methods of loading this script with the same functionality:

* __Plain script__: Load by copying and pasting the contents of the script.js file into your browser's inspect mode console (for example ctrl-shift-i on chrome)

* __Tampermonkey browser extension script__: Tampermonkey is a browser extension available for Edge, Chrome, etc. It automatically loads the script on the sporcle website, so you won't have to open the console and paste each time. Install by copying and pasting the contents of the `main.js` file into a new script file (delete any template code in there) in the extension's dashboard, and press `ctrl/cmd + s` to save. After it is saved it should automatically load on the website, and the hotkeys should work.
Link to Tampermonkey Extension: https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo

## Hotkeys
### Scrape Answers (`Alt + R`)
Before we can use the auto answer we first must get the answers, when you first play the game after about 5 seconds it gives the player an option to "give up" which will show all of the answers. This script utilizes the information from that screen to learn the answers for each question. For it to correctly answer all questions, make sure to press Alt + R before each quiz to refresh the answers list.

### Start Auto answer (`Alt + A`)
Once you have pressed the start game button, using the hotkey `Alt + A` will fully-automatically answer and submit all questions (how wonderful!) It should ask you for a time interval (in milliseconds) at which it answers the questions.

### Change Time (`Alt + Q`)
This will change the time displayed. In order to do this make sure you have finished the game first. Once the hotkey has been pressed, you should be asked for a time you want to display please wite it in the format of: `M:SS` eg. `3:05`.

### Change Score (`Alt + W`)
This will allow you to quickly change not only the score but also the percentage you achived. Once again please make sure the game is finished before trying to change the score. Upon using the hotkey, it should ask you for the new score, please only type the new score. Say the orginal score was `15/20` and you wanted the score to be `19/20` when the program prompts for the new score please only enter `19`.
