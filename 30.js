const prompt = require("prompt-sync")();
let opc = 0;
function menu(){
	console.log("1. Suma");
	console.log("2. Resta");
	console.log("3. Multiplicación");
	console.log("4. División");
	opc = prompt("Opción: ");
}
let n1 = prompt("Número 1: ");
let n2 = prompt("Número 2: ");
while(opc != 1 && opc != 2 && opc != 3 && opc != 4){
	console.log()
	menu();
	console.log();
}
if(opc == 1)
	console.log(n1 + " + " + n2 + " = " + (parseInt(n1) + parseInt(n2)));
else if(opc == 2)
	console.log(n1 + " - " + n2 + " = " + (parseInt(n1) - parseInt(n2)));
else if(opc == 3)
	console.log(n1 + " * " + n2 + " = " + n1 * n2);
else
	console.log(n1 + " / " + n2 + " = " + n1 / n2);
