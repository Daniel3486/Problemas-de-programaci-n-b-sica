const prompt = require("prompt-sync")();
let n = -1
while(n <= 0 || n >= 10)
	n = prompt("Número(entre 0 y 10): ");
for(let i = 1; i <= 10; i++)
	console.log(n + " * " + i + " = " + n * i);
