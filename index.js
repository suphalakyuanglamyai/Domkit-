// alert("Hello World!");


//for (var i = 0; document.querySelectorAll(".drum").length ; i++ ) {

  //document.querySelectorAll(".drum")[i].addEventListener("click",function () {
   
    // var audio = new Audio('sounds/tom-1.mp3');
    // audio.play();

   // console.log(this.innerHTML)

   //if (this.innerHTML==="w") {
    //var audio = new Audio('sounds/tom-1.mp3');
    //audio.play();
   //}


  //} );
//}///

//alert(" Button have length ="+document.querySelectorAll("button").length)

// คีย์บอร์ด
document.addEventListener("keydown", function(event) {
  // คีย์ที่ถูกกด
  switch (event.key) {
    case 'w':
      playSound('sounds/tom-1.mp3');
      break;
    case 'a':
      playSound('sounds/tom-2.mp3');
      break;
    case 's':
      playSound('sounds/tom-3.mp3');
      break;
    case 'd':
      playSound('sounds/tom-4.mp3');
      break;
    case 'j':
      playSound('sounds/crash.mp3');
      break;
    case 'k':
      playSound('sounds/kick-bass.mp3');
      break;
    case 'l':
      playSound('sounds/snare.mp3');
      break;
  }
});

// เล่นเสียง
function playSound(soundFile) {
  var audio = new Audio(soundFile);
  audio.play();
}
