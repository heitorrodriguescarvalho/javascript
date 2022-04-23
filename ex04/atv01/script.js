function contar() {

    const txtinicio = document.querySelector('input#inicio')
    var inicio = Number(txtinicio.value)

    const txtfim = document.querySelector('input#final')
    var fim = Number(txtfim.value)
    const txtpasso = document.querySelector('input#passo')
    var passo = Number(txtpasso.value)

    if (passo == "" || fim == "" || passo == "") {
        resposta.innerHTML = ("Preencha todos os campos!")
    } else if (passo == "0") {
        alert ('O valor de Passo "0" é inválido, logo o valor será redefinido para "1"')
        ++passo
    } else if (fim < inicio) 
    {
        passo = `-${passo}`
        passo = Number(passo)
        
        for (var contando = inicio; contando >= fim; contando += passo) {
            resposta.innerHTML += (`\uD83D\uDC49 ${contando} `)
        }

    } else if (passo > fim - inicio) {
        resposta.innerHTML = ('Os valores são Inválidos!')
    } else {

    resposta.innerHTML = ""

    for (var contando = inicio; contando <= fim; contando += passo) {
        resposta.innerHTML += (`\uD83D\uDC49 ${contando} `)
    }

    }
}