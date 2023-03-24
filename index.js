var random = Math.random(); //Primer Numero
random = Math.floor(random * 6) + 1; //Genera numeros del 1-6

var randomNum = Math.random(); //Segundo Numero
randomNum = Math.floor(randomNum*6)+1;

//Compara los numeros y muestra el ganador
if (random > randomNum){
    document.querySelector("h1").innerHTML="Player 1 Wins";
}else if (randomNum>random){
    document.querySelector("h1").innerHTML="Player 2 Wins";
}else{
    document.querySelector("h1").innerHTML="Tie";
}

document.querySelector(".img1").setAttribute("src", "images/dice" + random + ".png");

document.querySelector(".img2").setAttribute("src","images/dice" + randomNum + ".png");

