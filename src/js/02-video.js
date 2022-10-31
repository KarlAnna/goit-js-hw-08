import VimeoPlayer from "@vimeo/player"
const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);

player.on('timeupdate', function (data) {
    localStorage.setItem("videoplayer-current-time", data.seconds)
    const currentTime = localStorage.getItem('videoplayer-current-time')
    console.log(player);

    player.setCurrentTime(currentTime).then(function(seconds) {
    // seconds = the actual time that the player seeked to
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;

            default:
                // some other error occurred
                break;
        }
    });
});

// updateTime()  {
//         console.log(player);
//        this.currentTime = this.player.getCurrentTime().then(function(seconds) {
//             console.log('time updated! ' + seconds + "  !!! " );
//             localStorage.setItem("videoplayer-current-time", seconds);
//         }).catch(function(error) {
//         // an error occurred
//         });
//        this.player.on('timeupdate', throttle(this.updateTime, 1000));
//     };
// let iplayer = new VideoPlayer();
// iplayer.updateTime();

