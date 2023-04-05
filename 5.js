let total = 0;
for(let numero = 1; numero < 101; numero++)
	if(numero % 2 != 0){
		total++;
		console.log(numero);
	}
console.log("Hay " + total + " numeros impares");
