const prompt = require("prompt-sync")();
let frs = prompt("->");
let l = frs.length;
let count = 0;
for(let i = 0; i < l; i++)
	if(i < l-1){
		if(frs[i] == "." && frs[i+1] == " ")
		count += 1;
	}
	else{
		if(frs[i] == ".")
			count += 1;
	}
console.log("Hay " + count + " frases.");
