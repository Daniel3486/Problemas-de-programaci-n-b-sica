let matriz = [];
for(let i = 0; i != 4; i++){
	matriz.push([]);
	for(let j = 0; j != 5; j++)
		matriz[i].push(Math.round((Math.random()).toFixed(2) * 100 + 1));
}
console.log(matriz);
