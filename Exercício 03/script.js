function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var txtano = fano.value

    if (txtano.length == 0 || txtano > ano) {
        res.innerHTML = ('Dados Inválidos')
    } else {
        var fsex = document.getElementsByName ('radsex')
        var idade = ano - txtano
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            res.style.textAlign = 'center'
            if (idade != 1) {
                res.innerHTML = (`Você é um ${genero} de ${idade} anos!`)
                } else {
                    res.innerHTML = (`Você é um ${genero} de ${idade} ano!`)
                }

                if (idade <= 12) {
                    //criança
                    img.setAttribute('src', 'foto-bebe-m.png')

                } else if (idade <=17) {
                    //Adolescente
                    img.setAttribute('src', 'foto-jovem-m.png')

                } else if (idade <= 59) {
                    //Adulto
                    img.setAttribute('src', 'foto-adulto-m.png')

                } else {
                    //Idoso
                    img.setAttribute('src', 'foto-idoso-m.png')

                }

        } else {
            genero = 'Mulher'
            res.style.textAlign = 'center'
            if (idade != 1) {
            res.innerHTML = (`Você é uma ${genero} de ${idade} anos!`)
            } else {
                res.innerHTML = (`Você é uma ${genero} de ${idade} ano!`)
            }
            
            if (idade <= 12) {
                //criança
                img.setAttribute('src', 'foto-bebe-f.png')

            } else if (idade <=17) {
                //Adolescente
                img.setAttribute('src', 'foto-jovem-f.png')

            } else if (idade <= 59) {
                //Adulto
                img.setAttribute('src', 'foto-adulto-f.png')

            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }

        }
        res.appendChild(img)
    }

}