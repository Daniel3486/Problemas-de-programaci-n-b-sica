let tirada = 0;
function tirarDado(){
	tirada = Math.random()
	if(tirada < 1/6)
		return 1;
	else if(tirada < 2/6)
		return 2;
	else if(tirada < 3/6)
		return 3;
	else if(tirada < 4/6)
		return 4;
	else if(tirada < 5/6)
		return 5;
	else
		return 6;
}
let d1 = 0;
let d2 = 0;
let c = 0;
for(let i = 0; i < 100; i++){
	d1 = tirarDado();
	d2 = tirarDado();
	if(d1 + d2 == 10)
		c += 1;
	console.log(d1 + " "  + d2);
}
console.log("Sumaron 10 entre los 2 dados un total de " + c + " veces.");
