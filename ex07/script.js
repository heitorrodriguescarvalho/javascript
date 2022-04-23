let num = document.querySelector('input#num')
let lista = document.querySelector('section#lista')
let res = document.querySelector('div#res')

valores = []

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {

    if (isNumber(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = (`Valor ${num.value} adicionado.`)
        lista.appendChild(item)
        res.innerHTML = ('')
    } else {
        alert('O valor é inválido ou já está presente na lista!')
        res.innerHTML = ('')
    }

    num.value = ''
    num.focus()
}

num.value = ''
num.focus()

function limpar() {
    lista.innerHTML = ('')
    valores = []
    res.innerHTML = ('')
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores para continuar!')
    } else {
        valores.sort(function(a, b){return a-b})

        let mnum = valores[valores.length - 1]
        let nnum = valores[0]
        let soma = 0
        for (let pos in valores) {
            soma += valores[pos]
        }
        let media = soma/valores.length

        res.innerHTML = ('')
        res.innerHTML += (`<p>Ao todo, temos ${valores.length} números cadastrados;</p>`)
        res.innerHTML += (`<p>O maior valor informado foi ${mnum};</p>`)
        res.innerHTML += (`<p>O menor número informado foi ${nnum};</p>`)
        res.innerHTML += (`<p>Somando todos os valores, temos ${soma};`)
        res.innerHTML += (`<p>A média dos valores digitados é ${media.toString().replace('.', ',')}.</p>`)

    }
}