const prompt = require("prompt-sync")();
let n = 0;
while(n < 1)
	n = prompt("Número mayor o igual a 1: ");
let count = 0;
for(let i = 1; i < n; i++)
	if(n % i == 0)
		count ++;
if(count == 1)
	console.log("El número " + n + " es primo.");
else
	console.log("El número " + n + " no es primo.");
