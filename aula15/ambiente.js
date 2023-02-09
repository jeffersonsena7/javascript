let num = [5, 8, 4,]
num[3] = 6
num.push(7)
num.sort()
console.log(`nosso vetor é o ${num}`)
console.log(`o vetor tem ${num.length} elementos`)
console.log(`mostra o ultimo vetor ${num[2]}`)
let pos = num.lastIndexOf(4)
    console.log(`O valor esta na posição ${pos}`)

/*for(let pos = 0; pos < num.length; pos++){
    console.log(`usando o for ${num[pos]} elementos`)
}*/