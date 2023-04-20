const fs = require('fs');
const prompt = require("prompt-sync")();
const ruta = './DATOS.DAT';
function menu(){
	console.log("\n1. Insertar");
	console.log("2. Eliminar");
	console.log("3. Modificar");
	console.log("4. Salir");
	opc = prompt("Opción: ");
}
let opc = "0";
let ID, NOMBRE, APELLIDOS, DIRECCION, ESTADO, datos, DATOS, filas, fila, texto;
function rellenar(){
	console.log("");
	ID = prompt("ID: ");
        NOMBRE = prompt("NOMBRE: ");
	APELLIDOS = prompt("APELLIDOS: ");
        DIRECCION = prompt("DIRECCION: ");
	ESTADO = prompt("ESTADO: ");
        datos = "ID: " + ID + ", NOMBRE: " + NOMBRE + ", APELLIDOS: " + APELLIDOS + ", DIRECCION: " + DIRECCION + ", ESTADO: " + ESTADO + ".\n";
}
while(opc != "4"){
	menu();
	if(opc == "1"){
		rellenar();
		fs.appendFileSync(ruta, datos);
	}
	else if(opc == "2"){
		console.log("");
		ID = prompt("ID del sujeto a eliminar: ");
		DATOS = fs.readFileSync(ruta, "utf-8");
		filas = DATOS.split("\n");
		fila = -1;
		for(let i = 0; i < filas.length; i++)
			if(filas[i].startsWith("ID: " + ID + ", NOMBRE: "))
				fila = i;
		if(fila != -1){
			texto = filas[fila] + "\n";
			DATOS = DATOS.replace(texto, "");
			fs.writeFileSync(ruta, DATOS);
		}
		else
			console.log("ID no encontrado.");
	}
	else if(opc == "3"){
		console.log("");
		ID = prompt("ID del sugeto a modificar: ");
		DATOS = fs.readFileSync(ruta, "utf-8");
		filas = DATOS.split("\n");
                fila = -1;
                for(let i = 0; i < filas.length; i++)
                        if(filas[i].startsWith("ID: " + ID + ", NOMBRE: "))
                                fila = i;
		if(fila != -1){
			rellenar();
                        texto = filas[fila] + "\n";
                        DATOS = DATOS.replace(texto, datos);
                        fs.writeFileSync(ruta, DATOS);
		}
		else
			console.log("ID no encontrado");
	}
	else if(opc != "4")
		console.log("\nOpción invalida.");
}
