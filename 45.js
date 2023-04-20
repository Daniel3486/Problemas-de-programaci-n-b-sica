const fs = require('fs');
const prompt = require("prompt-sync")();
const ruta = './DATOS.DAT';
const DATOS = fs.readFileSync(ruta, "utf-8");
const filas = DATOS.split("\n");
let opc = "b";
let ID;
let registro = "";
while(opc == "b"){
	console.log("\nBuscar (b)\nSalir (Enter)");
	opc = prompt("");
	if(opc == "b"){
		console.log("");
		ID = prompt("ID del registro a buscar: ");
		for(fila of filas)
			if(fila.startsWith("ID: " + ID + ", NOMBRE: ")){
				registro = fila;
				break;
			}
		if(registro != ""){
			console.log(registro);
			registro = "";
		}
		else
			console.log("ID no encontrado.");
	}
}
