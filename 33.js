let matCalif = {"Matematicas":9.8, "Español":7.8, "Historia":8.5, "Ciencias Naturales":9.3, "Geografía":7.7, "Inglés":8.9, "Artes":7.2, "Educación Física":8.0, "Tecnología":8.4, "Música":6.9};
let calificaciones = [];
for(let i in matCalif)
	calificaciones.push(matCalif[i]);
let calTotal = 0;
for(let i of calificaciones)
	calTotal += i;
let media = (calTotal / calificaciones.length).toFixed(1);
console.log("Las media de las calificaciones: " + calificaciones + " es " + media)
