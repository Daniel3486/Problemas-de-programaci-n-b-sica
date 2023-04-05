const prompt = require("prompt-sync")();
let n = parseInt(prompt("Número->"));
let count = 0;
for(let numero = 1; numero < n+1; numero++)
	if(numero % 3 == 0){
		console.log(numero);
		count += 1;
	}
console.log("Existe(n) " + count + " número(s) que es/son multiplo(s) de 3 entre el 1 y el " + n);
