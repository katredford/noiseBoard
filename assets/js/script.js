function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    console.log(e.keyCode) //get code for future keys

    const nuull = new Audio('sounds/ert.wav');
    
    if(!audio) {
        nuull.play();
        key.classList.add('playing')
    }
    //return; //stop the function from running altogether
    audio.currentTime = 0; //rewind to the start
    audio.play();
    
    key.classList.add('playing');
    
    }
    
    
    function removeTransition(e) {
      if (e.propertyName !== 'transform') return; //skip it if its not a transform
    
      this.classList.remove('playing');
    }
    
    const keys = document.querySelectorAll(".key");
    keys.forEach(key => key.addEventListener('transitionend', removeTransition))
    
    window.addEventListener('keydown', playSound);