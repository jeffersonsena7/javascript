function contar(){
    var ini = window.document.getElementById('txti')
    var fim = window.document.getElementById('txtf')
    var passo = window.document.getElementById('txtp')
    var res = window.document.getElementById('res')

    if(ini.value == 0 || fim.value == 0 || passo.value == 0){
        window.alert('Esta faltando número')
    }else{
        res.innerHTML = `Contando...`
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        for(var c = i; c <= f; c += p)
        res.innerHTML += `${c},`
    }
}