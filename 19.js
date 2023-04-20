const prompt = require("prompt-sync")();
tiempo = [0, 0, 0]
function reloj(){
	if(tiempo[0] < 10)
        	tiempo[0] = "0" + tiempo[0].toString();
	if(tiempo[1] < 10)
                tiempo[1] = "0" + tiempo[1].toString();
	if(tiempo[2] < 10)
                tiempo[2] = "0" + tiempo[2].toString();
	console.log(tiempo[0] + ":" + tiempo[1] + ":" + tiempo[2]);
	tiempo[0] = parseInt(tiempo[0]);
	tiempo[1] = parseInt(tiempo[1]);
	tiempo[2] = parseInt(tiempo[2]);
	if(tiempo[2] == 59){
		tiempo[2] = 0;
		if(tiempo[1] == 59){
			tiempo[1] = 0;
			if(tiempo[0] == 23)
				tiempo[0] = 0;
			else
				tiempo[0] += 1;				
		}
		else
			tiempo[1] += 1;
	}
	else
		tiempo[2] += 1;
}
tiempo[0] = prompt("Hora(0-23)-> ");
tiempo[1] = prompt("Minuto(0-59)-> ");
function rel(){
	console.clear();
	reloj();
}
setInterval(rel, 1000);
