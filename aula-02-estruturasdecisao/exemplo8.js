//printar nome
prompt = require("prompt-sync")(); //importar prompt-sync

i = 0;
while (i < 4) {
  entrada = prompt("Entre com seu nome: ");
  console.log(`Saida: ${entrada}`);
  i = i + 1;
}
console.log("Fim");
