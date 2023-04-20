const fs = require("fs");
const prompt = require("prompt-sync")();
let ID = prompt("ID del sujeto a eliminar: ");
let DATOS = fs.readFileSync("./DATOS.DAT", "utf-8");
let filas = DATOS.split("\n");
let fila = -1;
for(let i = 0; i < filas.length; i++)
	if(filas[i].startsWith("ID: " + ID + ", NOMBRE: "))
		fila = i;
texto = "";
if(fila != -1){
	texto = filas[fila] + "\n";
	DATOS = DATOS.replace(texto, "");
	fs.writeFileSync("./DATOS.DAT", DATOS);
}
else
	console.log("ID no encontrado.");
