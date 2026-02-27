prompt = require("prompt-sync")();

entrada = prompt("Entre com o seu nome: ");

i = entrada.length-1 //comprimento da string
while (i >= 0) {
  console.log(i, entrada[i]); // i é a posição do caractere
  i = i - 1;
}
console.log("Fim");
