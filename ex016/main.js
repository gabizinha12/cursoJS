function verificar() {
    const data = new Date()
    const ano = data.getFullYear()

    const fano = document.getElementById('txtano')
    const res = document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano) {
        window.alert('erro tente novamente')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
          gênero = 'Homem'
          if(idade >= 0 && idade < 10) {
              // criança
              img.setAttribute('src', 'crianca-menino_editado.png')
          } else if (idade < 21) {
              // jovem 
              img.setAttribute('src', 'adolescente-homem_editado.png')
          } else if ( idade < 50) {
              // adulto
              img.setAttribute('src', 'adulto-homem_editado.png')
          } else {
              // idoso
              img.setAttribute('src', 'idoso-homem_editado.png')
          }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if(idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'crianca-menina_editado.png')
            } else if (idade < 21) {
                // jovem 
                img.setAttribute('src', 'adolescente-mulher_editado.png')
            } else if ( idade < 50) {
                // adulto
                img.setAttribute('src', 'adulto-mulher_editado.png')
            } else {
                // idoso
                img.setAttribute('src', 'idoso-mulher_editado.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}