// importar o prompt-sync
prompt = require("prompt-sync")();

entrada = prompt("Entre com um numero");
// converte/parse o conteúdo da varável entrada para inteiro/int

limite = parseInt(entrada)
i = 0;
while( i < limite) {
    console.log(i);
    i = i + 1;
}
console.log("Fim")
