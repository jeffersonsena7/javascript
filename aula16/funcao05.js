function fatorial(n){
    if(n == 1){
        return 1
    }else{
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))
/*
5! = 5x4x3x2x1
ou
5! = 5x4!

na formamula para calcular o fatorial de um numero

n! = n x (n-1)
e o fatorial de 1! = 1 sempre igual a 1
*/