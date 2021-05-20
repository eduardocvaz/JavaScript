new Promise((resolve, reject) => {
    resolve(['Ana', 'Bia'])
})  
    .then(valor => valor[0])
    .then(primeiro => primeiro[0])
    .then(letra => letra.toLowerCase())
    .then(console.log)