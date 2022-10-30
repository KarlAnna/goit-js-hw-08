const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', function(data) {
        localStorage.setItem("videoplayer-current-time", data.seconds)
    const currentTime = localStorage.getItem('videoplayer-current-time')
    return currentTime
});
console.log(currentTime);
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