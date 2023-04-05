const prompt = require("prompt-sync")();
let count = 0
let numeros = [null,null,null,null,null]
while(count != 5){
	n = parseInt(prompt("Número " + (count+1) + ": "));
	if(n < 1 || n > 0){
		numeros[count] = n;
		count += 1;
	}
}
let menor = numeros[0];
let mayor = numeros[0];
for(let i = 1; i != 5; i++)
	if(numeros[i] < menor)
		menor = numeros[1];
	else if(numeros[i] > mayor)
		mayor = numeros[i];
console.log("Mayor-> " + mayor);
console.log("Menor-> " + menor);
