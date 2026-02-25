// importar o prompt-sync
prompt = require("prompt-sync")();

entrada = prompt("Entre com um numero");
// converte/parse o conteúdo da varável entrada para inteiro/int
limite = parseInt(entrada)
i = 1;
while( i < limite) {
    if( i % 2 == 0) 
    console.log(i); 

    i = i + 1;
}
console.log("The end...")