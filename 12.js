let countPar = 0;
let countImpar = 0;
for(let n = 1; n < 101; n++){
	console.log(n);
	if(n % 2 == 0)
		countPar += 1;
	else
		countImpar +=1;
}
console.log("Hay " + countPar + " números pares y " + countImpar + " números impares.");
