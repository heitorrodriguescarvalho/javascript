var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são Exatamente ${hora}:00!`)
if (hora < 6 || hora >= 18) {
    console.log(`Boa noite!`)
} else if (hora < 12) {
    console.log(`Bom Dia!`)
} else {
    console.log(`Boa Tarde`)
}