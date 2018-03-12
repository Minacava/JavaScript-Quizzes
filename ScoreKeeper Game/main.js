var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var p1display = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");
var numImput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winnigScore = 5; 

p1Button.addEventListener("click", function(){

	if(!gameOver){
// incrementa uno cada vez que clickeas
	  p1Score++;
	  if(p1Score === winnigScore){
// cambiar el color una vez que uno de los dos jugadores gana, creamos una clase yen html y asociamos con la case de css
	  	p1display.classList.add("winner");
// deja de contabilizar clicks 
	  	gameOver = true;
	  }
// incrementar uno en pantalla cada vez que clickeas
	  p1display.textContent = p1Score;
	}
});

p2Button.addEventListener("click", function(){
	if(!gameOver){
// incrementa uno cada vez que clickeas
	p2Score++;
	  if(p2Score === winnigScore){
	  	p2display.classList.add("winner");
// deja de contabilizar clicks 
	  	gameOver = true;
	}
// incrementar uno en pantalla cada vez que clickeas
	  p2display.textContent = p2Score;
	}
});

resetButton.addEventListener("click", function(){
	reset();
});

// reiniciar el boton de p1 y p2 para volver a empezar el juego.
function reset(){
	p1Score = 0;
    p2Score = 0;
    p1display.textContent = 0;
    p2display.textContent = 0;
 // elmininar la clase de color verde para volver a comenzar
    p1display.classList.remove("winner");
    p2display.classList.remove("winner");
 // volver a comenzar con game over false.
    gameOver = false;

};

numImput.addEventListener("change", function(){
	winningScoreDisplay.textContent = this.value;
	winningScore = Number(this.value);
	reset();
});
