const fs = require("fs");
const prompt = require("prompt-sync")();
let ruta = ("./DATOS.DAT");
let estado = prompt("Estado a buscar: ");
let DATOS = fs.readFileSync("./DATOS.DAT", "utf-8");
let filas = DATOS.split("\n");
for(fila of filas)
	if(fila.includes("ESTADO: " + estado + "."))
		console.log(fila);
