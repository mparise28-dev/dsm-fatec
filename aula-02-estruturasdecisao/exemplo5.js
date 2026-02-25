//printar nome
prompt=require('prompt-sync')(); //importar prompt-sync
entrada=prompt("Entre com seu nome: ")
i=0
while(i<entrada.length){
    console.log(i, entrada[i])
    i=i+1
}
console.log("Fim")
