import VimeoPlayer from "@vimeo/player"
const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);

function timeupdate() {
    player.on('timeupdate', function (data) {
    localStorage.setItem("videoplayer-current-time", data.seconds)
    });
}

const throttleTimeupdate = throttle(timeupdate, 1000)
throttleTimeupdate()


const currentTime = localStorage.getItem('videoplayer-current-time')
player.setCurrentTime(currentTime).then(function (s) {
    // seconds = the actual time that the player seeked to
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError': break;

            default: break;
        }
    });