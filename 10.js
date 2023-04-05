const prompt = require("prompt-sync")();
let n = prompt("Número->");
if(n % 2 == 0)
	console.log(n + " es un número par.");
else if(n % 2 == 1)
	console.log(n + " es un número impar.");
else
	console.log(n + " no es un número ni par ni impar.");
