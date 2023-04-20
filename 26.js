const prompt = require("prompt-sync")();
let frase = prompt("-> ");
let esp = Math.floor((process.stdout.columns - frase.length) / 2);
console.log(" ".repeat(esp) + frase);
