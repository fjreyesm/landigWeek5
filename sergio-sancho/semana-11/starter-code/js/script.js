  //

    window.addEventListener('keydown',function(e){
      const sonido = document.querySelector(`audio[data-key="${e.keyCode}"]`);
   
      sonido.play();
    });