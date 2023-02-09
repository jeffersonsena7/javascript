let amigo = {
    nome: 'Jefferson',
    sexo: 'M',
    peso: 85.4,
    engordar(p=0){ //coloca igual a 0, caso não teha nehum valor na variavel
        console.log('engordou')
        this.peso += p  // usar 'this para objeto e += para concatenar
    }
}
    amigo.engordar(2) // para aumentar 2kg no peso.
    console.log(`${amigo.nome} pesa ${amigo.peso}kg` )