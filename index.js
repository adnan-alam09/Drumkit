
/////////// - DETECTING BUTTON PRESS - /////////////////////////////////////////////

var  numberOfDrumButtons = document.querySelectorAll(".drum").length;

/// coud also write it this way - the way on the bottom is called a anonymous function method

// for(var i=0; i<numberOfDrumButtons; i++){
//   document.querySelectorAll(".drum")[i].addEventListener("click", clicked);
// }
//
// function clicked(){
//   var audio = new Audio('audio_file.mp3');
//    audio.play();
// }

for(var i=0; i<numberOfDrumButtons; i++){  // code should run for 7 times as there are 7 drums
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){  // here 'click' is part of the documentation - check addEventListener properties

    var buttonInnerHTML = this.innerHTML; // 'this.' looks at the button that triggered the event

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  });
}

//////////////////// - DETECTING KEYBOARD PRESS - ///////////////////////////////////////////////////////

document.addEventListener("keydown", function(event){ // event listener added to entire document to detect keyboard presses
                                                      // function(evt) --- the event that triggered the function  - can call the thing inside the bracket anything (usually event or evt)
  makeSound(event.key);
  buttonAnimation(event.key);
});
// above addEventListener is a higher order function - it takes an a function as an input
// function(event) - is called a callback function - it allows for us to wait for something to finish havening   - in this case waiting for a keyboard press


function makeSound(key){

  switch (key) {
    case "w":
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play()
      break;

    case "a":
        var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play()
      break;

    case "s":
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play()
      break;

    case "d":
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play()
      break;

    case "j":
        var snare = new Audio('sounds/snare.mp3');
        snare.play()
      break;

    case "k":
        var crash = new Audio('sounds/crash.mp3');
        crash.play()
      break;

    case "l":
        var kick = new Audio('sounds/kick-bass.mp3');
        kick.play()
      break;


    default:console.log(buttonInnerHTML);

  }
}



function buttonAnimation(currentKey){

  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed"); // this now applies the pressed class and its CSS

  // now need to remove it after a delay - so it goes back to without the class
  // only want to apply this class when pressed
  // use the timeout function in javascript


  // function removes the class after 0.1s
  setTimeout(function(){
    activeButton.classList.remove("pressed")
  }, 100);

}
