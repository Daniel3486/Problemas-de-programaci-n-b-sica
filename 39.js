let tabla = [];
let valor = 0;
for(let i = 0; i < 3; i++){
	tabla.push([]);
	for(let j = 0; j < 4; j++){
		tabla[i].push([])
		for(let k = 0; k < 5; k++){
			valor += 1;
			tabla[i][j].push(valor);
		}
	}
}
console.log(tabla);
