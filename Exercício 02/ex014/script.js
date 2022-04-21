function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()

    if (minuto < 10) {
        String(minuto)
        minuto.toString()
        txtminuto = `0${minuto}`
    }

    if (segundo < 10) {
        String(segundo)
        segundo.toString()
        txtsegundo = `0${segundo}`
    }
    var txthora
    var horafinal
    if (hora > 12) {
        txthora = hora - 12
        String(txthora)
        txthora.toString()
        horafinal = `${txthora}:${txtminuto}:${txtsegundo} p.m.`
    } else {
        String(hora)
        hora.toString()
        horafinal = `${txthora}:${txtminuto}:${txtsegundo} a.m.` 
    }
    msg.innerHTML = `<h1>${horafinal}</h1>`
    if (hora >= 0 && hora < 12) {
    //bom dia
    img.src = 'fotomanha.jpg'
    document.body.style.background = '#e2cd9f'
    }else if (hora < 18) {
    //Boa tarde
    img.src = 'fototarde.jpg'
    document.body.style.background = '#b9846f'
    } else {
    //Boa noite
    img.src = 'fotonoite.jpg'
    document.body.style.background = '#515154'
    }
}