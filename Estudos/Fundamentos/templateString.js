const nome = "Rebeca"
const contatenacao = 'Ola' + nome + '!'
const template = `
Ola
${nome}!`
console.log(contatenacao,template)

//expressoes....
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidada')} !`)