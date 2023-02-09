function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()          //colocar hora do computador
    var hora = data.getHours()     // colocar a hora automatica do computador
    
        msg.innerHTML = `<strong>Agora são ${hora} horas</strong>`
    if(hora >= 0 && hora < 12){
        //bom dia
        img.src = 'fotodia.png'
        document.body.style.background ='#fff1c7'
    }
    else if(hora >=12 && hora <18){
        //boa tarde
        img.src = 'fototarde.png'
        document.body.style.background = '#f3b85c'
    }
    else{
        //boa noite
        img.src = 'fotonoite.png'
        document.body.style.background = '#403630'
    }
}