let pares = 0;
let impares = 0;
for(let i = 2; i < 1000; i = i + 2)
	pares += i;
for(let i = 3; i < 1000; i = i + 2)
	impares += i;
console.log("La suma de los pares es: " + pares);
console.log("La suma de los impares es: " + impares);
