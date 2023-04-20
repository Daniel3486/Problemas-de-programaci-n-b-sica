const prompt = require("prompt-sync")();
let n1 = prompt("Número 1: ");
let n2 = prompt("Número 2: ");
if(n2 < n1){
	let n = n1;
	n1 = n2;
	n2 = n;
}
n1 = parseInt(n1);
let c = 0;
let s = 0;
for(let i = n1+1; i < n2; i++)
	if(i % 2 == 0){
		console.log(i);
		c += 1;
		s += i;
	}
console.log("Hay " + c + " números múltiplos de 2.");
console.log("La suma de los números multiplos de 2 es: " + s);
