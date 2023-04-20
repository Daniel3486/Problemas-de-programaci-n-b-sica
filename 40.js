let ventas = [];
let representantes = 3;
let meses = 12;
let productos = 4;
for(let i = 0; i < representantes; i++){
	ventas.push([]);
	for(let j = 0; j < meses; j++){
		ventas[i].push([])
		for(let k = 0; k < productos; k++){
			ventas[i][j].push(Math.round(Math.random()*25));
		}
	}
}
console.log(ventas);
console.log("Ventas")
for(let i = 0; i < representantes; i++){
        console.log("Representante " + (i+1));
        for(let j = 0; j < meses; j++){
                console.log("Mes " + (j + 1));
                for(let k = 0; k < productos; k++)
			console.log("Producto " + (k + 1) + ": " + ventas[i][j][k]);
	}
}
let ventaTotal = 0;
for(let i = 0; i < representantes; i++)
        for(let j = 0; j < meses; j++)
                for(let k = 0; k < productos; k++)
                        ventaTotal += ventas[i][j][k];
console.log("El total de ventas es: " + ventaTotal);
