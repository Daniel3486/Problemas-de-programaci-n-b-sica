const prompt = require("prompt-sync")();
let SN = "";
while(SN != "S" && SN != "N"){
	SN = prompt("S/N? ");
	if(SN != "S" && SN != "N")
		console.log("ESO NO (>_<) POR FAVOR");
}
