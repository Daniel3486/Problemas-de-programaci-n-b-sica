const prompt = require("prompt-sync")();
let frase = prompt("Frase-> ").toUpperCase();
let letra = prompt("Letra: ").toUpperCase();
let l = frase.length;
let c = 0;
for(let i of frase)
	if(i == letra)
		c += 1;
console.log("La letra " + letra + " aparece " + c + " veces en la frase.");
