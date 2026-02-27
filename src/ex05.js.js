prompt = require("prompt-sync")();

nome = prompt("Entre com o nome: ");
i = 0;

while (i < nome.length) {
  console.log(nome[i]);
  i = i + 2;
}


nome = prompt("Entre com o nome: ");
i = 0;
while (i < nome.length) {
  if( i%2 == 0) {
    console.log(nome[i]);
  }
  i = i = 1
}