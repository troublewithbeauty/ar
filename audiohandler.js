//from https://stackoverflow.com/questions/47921013/play-sound-on-click-in-a-frame

AFRAME.registerComponent('audiohandler', {
    init:function() {
       let playing = false;
       let audio = document.querySelector("#audio");
       this.el.addEventListener('click', () => {
            if(!playing) {
                audio.play();
             } else {
                audio.pause();
                audio.currentTime = 0;
             }
             playing = !playing;
       });
    }
  })