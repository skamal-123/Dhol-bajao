var noOfBtn = document.querySelectorAll(".btn").length;
for (var i = 0; i < noOfBtn; i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click",function () {
    
    var btnInnerHTML = this.innerHTML;
    
    makeSound(btnInnerHTML);
    
    buttonAnimation(btnInnerHTML);
  })
}
document.addEventListener("keydown", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {
  

switch (key) {
  case 'w':
    var wdrum = new Audio("sounds/tom-1.mp3");
    wdrum.play();
    break;
  case 'a':
    var adrum = new Audio("sounds/tom-2.mp3");
    adrum.play();
      break;
  case 's':
    var sdrum = new Audio("sounds/tom-3.mp3");
     sdrum.play();
      break;
  case 'd':
    var ddrum = new Audio("sounds/tom-4.mp3");
    ddrum.play();
    break;
  case 'f':
    var fdrum = new Audio("sounds/snare.mp3");
    fdrum.play();
    break;
  case 'g':
    var gdrum = new Audio("sounds/crash.mp3");
    gdrum.play();
    break;
  case 'h':
    var hdrum = new Audio("sounds/kick-bass.mp3");
    hdrum.play();
    break;
    
  default:
    console.log(key);
}
}
function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
