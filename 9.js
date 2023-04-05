const prompt = require("prompt-sync")();
let n = prompt("Número->");
if(n > 0)
	console.log(n + " es un número positivo.");
else if(n < 0)
	console.log(n + " es un número negativo.");
else
	console.log(n + " no es un número ni positivo ni negativo.");
