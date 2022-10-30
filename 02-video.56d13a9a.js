const e=document.querySelector("iframe");new Vimeo.Player(e).on("timeupdate",(function(e){localStorage.setItem("videoplayer-current-time",e.seconds);const o=localStorage.getItem("videoplayer-current-time");console.log(o)}));
//# sourceMappingURL=02-video.56d13a9a.js.map
