let count = 0;
for(let n = 2; n < 100; n++)
	if(n % 2 == 0 || n % 3 == 0){
		console.log(n);
		count += 1;
	}
console.log("Hay " + count + " números que son múltiplos de 2 o de 3 entre el 1 y el 100.");
