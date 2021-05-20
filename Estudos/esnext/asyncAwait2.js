function gerarNumerosEntre(min, max, numerosProibidos) {
    if (min > max) [max, min] = [min, max]
    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator + min)
        if (numerosProibidos.includes(aleatorio)) {
            reject('Número Proibido')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMegaCena(qtdeNumeros) {
    try {
        const numeros = []
        for (let _ of Array(qtdeNumeros).fill()) {
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros
    } catch (e) {
        throw "Que chato!!"
    }
}

gerarMegaCena(15)
    .then(console.log)
    .catch(console.log)