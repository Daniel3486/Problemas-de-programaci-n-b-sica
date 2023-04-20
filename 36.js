let matriz = [];
for(let i = 0; i != 4; i++){
	matriz.push([]);
	for(let j = 0; j != 5; j++)
		matriz[i].push(Math.round((Math.random()).toFixed(2) * 100 + 1));
}
console.log(matriz);
let matrizT = [];
for(let i in matriz[0])
	matrizT.push([]);
for(let i = 0; i != matriz.length; i++)
	for(let j = 0; j != matriz[i].length; j++)
		matrizT[j].push(matriz[i][j]);
console.log(matrizT);
