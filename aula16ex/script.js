let num = window.document.querySelector('input#fnum')         
let lista = window.document.querySelector('select#flista')
let res = window.document.querySelector('div#res')
let valores = []      //tem que criar uma variavel para o vetor 

function isnumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){ //se numero é menor q 1 ou maior q 100
        return true
    }else{
        return false
    }
}
function inlista(n, l){
    if(l.indexOf(Number(n)) != -1){  //se o numero não foi encontrado na lista
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isnumero(num.value) && !inlista(num.value, valores)){ //se 'isnumero' é um numero e se não esta na lista
        valores.push(Number(num.value))  // o pushu add um valor ao vetor, o número de num vai pra dentro do vetor
        let item = window.document.createElement('option') //add um elemento no select, tem que criar um 'optimo'
        item.text = `Valor ${num.value} adicionado.` //o valor que foi add em item variavel
        lista.appendChild(item) // para add o item na lista
        res.innerHTML = '' //limpar o resultado finalizado
    }else{
        window.alert('Valor invalido ou ja se encontra em lista')
    }
    num.value = '' // para apagar o valor que foi digitado e colocar outra deixar vazio
    num.focus()  // deixar o cusor no mesmo local para digitar novamente
}

function finalizar(){
    if(valores.length == 0){ // se o vetor esta vazio
        window.alert('Adicione valores antes de finalizar')
    }else{
        let total = valores.length // quantos elementos o vator tem
        let maior = valores[0] // variavel para maior vetor na primeira posição 0
        let menor = valores[0] // valores para menor vetor na primeira posição 0
        let soma = 0 // sempre inicia com zero
        let media = 0 // sempre inicia com zero
        for(let pos in valores){ // para saber se o valor é maior ou menor
            soma += valores[pos] // para fazer a soma 
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / total // para saber a media
        res.innerHTML = '' // zerar o valor
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma de todos os valores temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>` 
    }
}