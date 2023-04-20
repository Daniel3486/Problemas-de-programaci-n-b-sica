const prompt = require("prompt-sync")();
let matCalif = {"Matematicas":9.8, "Español":7.8, "Historia":8.5, "Ciencias Naturales":9.3, "Geografía":7.7, "Inglés":8.9, "Artes":7.2, "Educación Física":8.0, "Tecnología":8.4, "Música":6.9};
let nota = prompt("¿Qué nota buscas? ");
let encontrada = 0;
for(let i in matCalif)
	if(nota == matCalif[i]){
		console.log("La nota que buscas le pertenece a la materia de " + i + ".");
		encontrada = 1;
	}
if(encontrada == 0)
	console.log("La nota que buscas no le pertenece a materia alguna.")
