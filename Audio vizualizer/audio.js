window.onload = function() {
  
    var file = document.getElementById("soundfile");
    var audio = document.getElementById("audio");
    
    file.onchange = function() {
      var files = this.files;
      audio.src = URL.createObjectURL(files[0]);
      audio.load();
      audio.play();
  
      var context = new AudioContext();
      //audio from the file
      var src = context.createMediaElementSource(audio);
      var analyser = context.createAnalyser();
  
      var canvas = document.getElementById("canvas");
      var ctx = canvas.getContext("2d");
      src.connect(analyser);
      analyser.connect(context.destination);
      analyser.fftSize = 256;
  
      var bufferLength = analyser.frequencyBinCount;
      var dataArray = new Uint8Array(bufferLength);
  
      var WIDTH = canvas.width;
      var HEIGHT = canvas.height;
      var barWidth = (WIDTH / bufferLength) * 1.5;
      var barHeight;
      var x = 0;
  
      function renderFrame() {
        requestAnimationFrame(renderFrame);
  
        x = 0;
        
       analyser.getByteFrequencyData(dataArray);
  
        ctx.clearRect(0, 0, WIDTH, HEIGHT);
  
        for (var i = 0; i < bufferLength; i++) {
          barHeight = dataArray[i];
          
          var gradient = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT);
  gradient.addColorStop("0", " #5bf12c ");
  gradient.addColorStop("0.5", " #c1f0b2 ");
  gradient.addColorStop("1.0", "#000");
          ctx.fillStyle = gradient;
          ctx.font = "100px Georgia";
          ctx.fillText("|", x, HEIGHT-barHeight);
  
          x += barWidth + 2;
        }
      }
  
      audio.play();
      renderFrame();
    };
  };