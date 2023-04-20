const prompt = require("prompt-sync")();
let n1 = prompt("Número 1: ");
let n2 = prompt("Número 2: ");
if(n2 < n1){
	let n = n1;
	n1 = n2;
	n2 = n;
}
n1 = parseInt(n1);
let count = 0;
let countP = 0;
let impar = 0;
for(let i = n1+1; i < n2; i++){
	console.log(i);
	count += 1;
	if(i % 2 == 0)
		countP += 1;
	else
		impar += i;
}
console.log("Hay " + count + " números.");
console.log("Hay " + countP + " números pares.");
console.log("La suma de los impares es: " + impar);
