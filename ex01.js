prompt = require('prompt-sync')

nome = promtp("Entre com o nome: ");
i = 0;

while (i < nome.length) {
    console.log(i, nome[0])
    i = i + 1;
}