function contar() {
    var inicio = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = `Impossível contar, insira mais dados`
    } else {
        res.innerHTML = 'Contando:  '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p >= 0) {
            alert('Erro! Considerando passo 1!!')
            p = 1
        } 
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c}   `
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c}   `
            }
        }
    }
}