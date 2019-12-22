# SongMoji - Songs + Emojis = Fun

SongMoji is a simple game - You See Emojis on the screen and have to guess which song they describe.

## How to play the game

### Instructions

> You compete in teams against each other. Every team has exactly one controller, which is the team's own buzzer.
  The goal of the game is to guess the title of the correct song by interpreting the Emojis shown on the screen.
  The team who pushes the buzzer button (X or A) first, is allowed to answer the question in the next five seconds.
  Is the answer correct, the team receives points based on the difficulty of the song (Hard=5, Medium=2, Easy=1).
  If the answer is wrong though, the team receives a minus point.
  Only the first answer of the team will be accepted. Just the title of a song is required, not the interpret.
  There are various difficulties and categories, which are totally random though."

The instructions are also shown when starting the app.

### Requirements

* You need at least two teams to play the game and (optionally) a moderator who assigns points and shows the solution
* A maximum of four teams can play the game at once (team sizes can be set as you like)
* You need **one controller** per team to play the game (alternatively, you can also play the game "turn-wise")
* **Attention**: The controller mapping is tested on **Windows** and **Linux**. The MacOS mapping is **wrong**/**not working**, at least for Xbox controllers.

### Moderator controls

* To show the solution for the current song, press <kbd>SHIFT</kbd> + <kbd>S</kbd>
* To add a point for team one, press <kbd>U</kbd>, to remove a point press <kbd>J</kbd>
* To add a point for team one, press <kbd>I</kbd>, to remove a point press <kbd>K</kbd>
* To add a point for team one, press <kbd>O</kbd>, to remove a point press <kbd>L</kbd>
* To add a point for team one, press <kbd>P</kbd>, to remove a point press <kbd>Ö</kbd> _(Sorry, german keyboard layout ^^# Change it in [./components/TeamOverview.vue](./components/TeamOverview.vue) )_

### Developer Information

### Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# Serve as JAMstack app
$ yarn generate
```

### Change the Song List

The song list is located under [./assets/song-list.js](./assets/song-list.js). You can adapt it as you like.
Currently, there are many well-known songs included but also some songs that are only popular in Germany.
I usually adapt the song list before playing the game and tailor it to the group.

### Turn-based alternative

If you don't have controllers by hand, you can also play the game turn-based. For that, you don't need the whole gamepad
detection and can remove it and hardcode the teams instead. Then, the teams take turns to answer.

## Credits

Inspired by [Smiley Cyrus](https://youtu.be/pLbpY6jfH0k?t=378)

### Buzzer Sounds

* [https://freesound.org/people/ScreamStudio/sounds/392617/](https://freesound.org/people/ScreamStudio/sounds/392617/)
* [https://freesound.org/people/mgrin10@student.dkit.ie/sounds/464400/](https://freesound.org/people/mgrin10@student.dkit.ie/sounds/464400/)
* [https://freesound.org/people/Mafon2/sounds/436541/](https://freesound.org/people/Mafon2/sounds/436541/)
* [https://freesound.org/people/Hoerspielwerkstatt_HEF/sounds/457909/](https://freesound.org/people/Hoerspielwerkstatt_HEF/sounds/457909/)

### Emoji Symbols

Emoji Symbols are loaded via [Twemoji](https://github.com/twitter/twemoji).
