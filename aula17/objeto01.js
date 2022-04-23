let amigo = {nome: 'José',
idade: '24',
peso: '85.4',
sexo:'Masculino',
engordar(p=0) {
    console.log('engordou!')
    this.peso + p
}
}
amigo.engordar(2)
console.log(amigo.peso)