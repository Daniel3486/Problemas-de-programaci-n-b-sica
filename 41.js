const fs = require('fs');
const prompt = require("prompt-sync")();
const ruta = './DATOS.DAT';
let ID = prompt("ID: ");
let NOMBRE = prompt("NOMBRE: ");
let APELLIDOS = prompt("APELLIDOS: ");
let DIRECCION = prompt("DIRECCION: ");
let ESTADO = prompt("ESTADO: ");
let datos = "ID: " + ID + ", NOMBRE: " + NOMBRE + ", APELLIDOS: " + APELLIDOS + ", DIRECCION: " + DIRECCION + ", ESTADO: " + ESTADO + ".\n";
fs.appendFileSync(ruta, datos);