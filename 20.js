const prompt = require("prompt-sync")();
function factorial(n){
	if(n == 1)
		return 1;
	else
		return n * factorial(n-1);
}
function fact(n){
	console.log("El factorial de " + n + " es " + factorial(n));
}
let num = prompt("Número-> ");
fact(num);
