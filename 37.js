let matCalif = {
  "Pablo": {
    "Matematicas": 9.8,
    "Español": 7.8,
    "Historia": 8.5,
    "Ciencias Naturales": 9.3,
    "Geografía": 7.7,
    "Inglés": 8.9,
    "Artes": 7.2,
    "Educación Física": 8.0,
    "Tecnología": 8.4,
    "Música": 6.9
  },
  "Mauricio": {
    "Matematicas": 9.5,
    "Español": 7.2,
    "Historia": 7.5,
    "Ciencias Naturales": 8.5,
    "Geografía": 7.6,
    "Inglés": 8.9,
    "Artes": 6.9,
    "Educación Física": 9.0,
    "Tecnología": 8.7,
    "Música": 7.2
  },
  "Ana": {
    "Matematicas": 8.9,
    "Español": 8.0,
    "Historia": 7.2,
    "Ciencias Naturales": 9.1,
    "Geografía": 8.5,
    "Inglés": 8.2,
    "Artes": 8.5,
    "Educación Física": 7.8,
    "Tecnología": 8.3,
    "Música": 8.1
  },
  "Luis": {
    "Matematicas": 8.5,
    "Español": 7.5,
    "Historia": 8.1,
    "Ciencias Naturales": 8.3,
    "Geografía": 7.9,
    "Inglés": 7.8,
    "Artes": 8.0,
    "Educación Física": 9.2,
    "Tecnología": 8.9,
    "Música": 7.7
  },
  "María": {
    "Matematicas": 9.2,
    "Español": 8.5,
    "Historia": 9.0,
    "Ciencias Naturales": 8.8,
    "Geografía": 8.7,
    "Inglés": 9.3,
    "Artes": 8.2,
    "Educación Física": 8.6,
    "Tecnología": 9.1,
    "Música": 8.5
  }
}
let tabla = [[" "]];
for(let i in matCalif){
	tabla = [["    "]];
	for(let j in matCalif[i])
		tabla[0].push(j);
}
let c = 1;
for(let i in matCalif){
	tabla.push([i]);
	for(let j in matCalif[i])
		tabla[c].push(matCalif[i][j]);
	c += 1;
}
console.log(tabla);
let columna = "";
for(let i of tabla){
	for(let j of i)
		columna += j + " ";
	console.log(columna);
	columna = "";
}
