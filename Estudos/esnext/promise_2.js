
// setTimeout(() => {
//     console.log('Executando callback...')

//     setTimeout(() => {
//         console.log('Executando callback...')

//         setTimeout(() => {
//             console.log('Executando callback...')
//         }, 2000)

//     }, 2000)

// }, 2000)

function esperarPor(tempo = 2) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Executando promise...')
            resolve()
        }, tempo * 1000)
    })
}

esperarPor()
    .then(() => esperarPor())
    .then(esperarPor)
    .then(esperarPor)