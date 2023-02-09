function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value)> ano ){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
    
        if(fsex[0].checked){
            genero = 'homem'
            if(idade >=0 && idade <10){
                //criança
                img.setAttribute('src', 'bebemenino.png')
                window.document.style.body.color = 'red'
            }
            else if(idade >=10 && idade <18){
                //jovem
                img.setAttribute('src', 'adolecentemenino.png')
            }
            else if(idade >=18 && idade < 60){
                //adulto
                img.setAttribute('src', 'adultohomem.png')
            }
            else{
                //idoso
                img.setAttribute('src', 'idoso.png')
            }
        }
        if(fsex[1].checked){
            genero = 'mulher'
            if(idade >=0 && idade <10){
                //criança
                img.setAttribute('src', 'bebemenina.png')
            }
            else if(idade >=10 && idade <18){
                //jovem
                img.setAttribute('src', 'adolecentemenina.png')
            }
            else if(idade >=18 && idade < 60){
                //adulto
                img.setAttribute('src', 'adultamulher.png')
            }
            else{
                //idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.texteAlin = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}