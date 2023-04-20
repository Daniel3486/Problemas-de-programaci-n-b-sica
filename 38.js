let matriz = [];
let m = Math.round(Math.random() * 7);
let n = Math.round(Math.random() * 7);
for(let i = 0; i != m; i++){
	matriz.push([]);
	for(let j = 0; j != n; j++)
		matriz[i].push(Math.round((Math.random()).toFixed(2) * 100 + 1));
}
console.log(matriz);
let inter = Math.trunc(m / 2);
let temp = [];
let i = 0;
let j = 0;
let c = 0;
while(inter != 0){
	i = inter;
	while(i < m){
		j = i;
		c = 0;
		while(j-inter >= 0 && c == 0){
			if(matriz[j][0] < matriz[j-inter][0]){
				temp = matriz[j];
				matriz[j] = matriz[j-inter];
				matriz[j-inter] = temp;
				j = j - inter;
			}
			else
				c = 1;
		}
		i += 1;
	}
	inter = Math.trunc(inter / 2);
}
console.log(matriz);
