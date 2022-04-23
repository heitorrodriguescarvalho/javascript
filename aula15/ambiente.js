let a = [4, 33, 102, 9, 5]
/*
console.log(`Os valores são ${a}`)
console.log(`O vetor tem ${a.length} posições!`)
console.log(`O primeiro valor é ${a[0]}`)
console.log(`Os valores em ordem crescente são ${a.sort(function(a, b){return a - b })}`)


console.log(a)

for (var mostrar = 0; mostrar < a.length; mostrar++) {
    console.log(`Valor ${a[mostrar]}`)
}
*/

for (let loc in a) {
    console.log (`O valor da posição ${loc} é ${a[loc]} e ${a.indexOf(100)}`)
}
