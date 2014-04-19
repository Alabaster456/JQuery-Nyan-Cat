$(document).ready(function(){
   $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
			// Left arrow key pressed
			case 37:
				$('#nyancat').animate({left: "-=100px"}, 'fast');
				break;
			// Up Arrow Pressed
			case 38:
			    $('#nyancat').animate({top: "-=100px"}, 'fast');
				// Put our code here
				break;
			// Right Arrow Pressed
			case 39:
			    $('#nyancat').animate({left: "+=100px"}, 'fast');
				// Put our code here
				break;
			// Down Arrow Pressed
			case 40:
			 $('#nyancat').animate({top:"+=100px"}, 'fast');   
				// Put our code here
				break;
		}
	});
  $(document).keyup(function(key) {
$('#nyancat').stop(true);

          });
});
var snd = new Audio("http://radio.db0.fr/mp3/MEMES/Nyan%20Cat.mp3");
snd.play();
