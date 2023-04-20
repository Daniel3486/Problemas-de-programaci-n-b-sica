const prompt = require("prompt-sync")();
let rom = "";
let romanos = ["M","D","C","L","X","V","I"]
let numero = 5000;
while(numero >= 5000)
	numero = prompt("Número menor a 5000: ");
if(numero.length == 4){
	if(numero[0] == 4){
		console.log("__");
		rom += "IV";
	}
	else
		for(let i = 0; i < numero[0]; i++)
			rom += "M";
	numero = numero[1] + numero[2] + numero[3];
}
for(let i = 0; i <= 4; i += 2){
	if(numero.length == 3 - (i/2)){
		if(numero[0] == 9)
			rom += romanos[i+2] + romanos[i];
		else if(numero[0] >= 4){
			if(numero[0] == 4)
				rom += romanos[i+2];
			rom += romanos[i+1];
			for(let j = 5; j < numero[0]; j++)
				rom += romanos[i+2];
		}
		else
			for(let j = 0; j < numero[0]; j++)
				rom += romanos[i+2];
		numero = numero.slice(1);
	}
}
console.log(rom);
