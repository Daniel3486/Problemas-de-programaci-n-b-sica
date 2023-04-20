const prompt = require("prompt-sync")();
let opc = 0;
function menu(){
	console.log("1. Comprobar si es primo");
	console.log("2. Hallar su factorial");
	console.log("3. Tabla de multiplicar");
	opc = prompt("Opción: ");
}
function factorial(n){
	if(n == 1)
		return 1;
	else
		return n * factorial(n-1);
}
let n = prompt("Número: ");
while(opc != 1 && opc != 2 && opc != 3){
	console.log()
	menu();
	console.log();
}
let count = 0;
if(opc == 1){
	for(let i = 1; i < n; i++)
		if(n % i == 0)
			count ++;
	if(count == 1)
		console.log("El número " + n + " es primo.");
	else
		console.log("El número " + n + " no es primo.");
}
else if(opc == 2)
	console.log("El factorial de " + n + " es " + factorial(n));
else
	for(let i = 1; i <= 10; i++)
		console.log(n + " * " + i + " = " + n * i);
