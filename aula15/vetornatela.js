let valores = [8, 1, 7, 4, 2, 9]

/*for(let cont = 0;cont < valores.length;cont++)
    console.log(`valores do vetor${valores[cont]}`)
    */

for(let cont in valores){
    console.log(`A posição ${cont} tem o valor ${valores[cont]}`)
}