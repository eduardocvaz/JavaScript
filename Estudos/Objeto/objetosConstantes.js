//pessoa -> c54a54c -> {...}
const pessoa = {nome: 'João'}
pessoa.nome = "Pedro"

console.log(pessoa)

// pessoa -> c21a23b-> {...} 
//pessoa = {nome: 'Ana'}

Object.freeze(pessoa)

pessoa.nome = 'Maria'
console.log(pessoa.nome)