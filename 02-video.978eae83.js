!function(){var e=document.querySelector("iframe");new Vimeo.Player(e).on("timeupdate",(function(e){localStorage.setItem("videoplayer-current-time",e.seconds);var o=localStorage.getItem("videoplayer-current-time");console.log(o)}))}();
//# sourceMappingURL=02-video.978eae83.js.map
