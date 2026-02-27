prompt = require("prompt-sync")();

nome = prompt("Entre com o nome: ");
pos = nome.length - 1;

console.log("Último:", nome[pos]);
