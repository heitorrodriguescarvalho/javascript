function calcular() {

    const num = document.querySelector('input#numero').value
    var res = document.getElementById ('tabres')
    
    if (num.length == 0) {alert ('Insira o Número!')}
    else {
    let c = Number(0)
    res.innerHTML= ("")
    while (c <= 10) {
        
        let item = document.createElement ('option')
        item.text = `${num}x${c} = ${num*c}`
        res.appendChild(item)
        c++
        }
    }
}