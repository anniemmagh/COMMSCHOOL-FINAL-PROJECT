let imgIndex = 0;
rollImages();
function rollImages() {
  var i;
  const images = document.querySelectorAll("img");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";  
  }
  imgIndex++;
  if (imgIndex > images.length) {imgIndex = 1}    
  
  images[imgIndex-1].style.display = "block";  
  
  setTimeout(rollImages, 3000);
}