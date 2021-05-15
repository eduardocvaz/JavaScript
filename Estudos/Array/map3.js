Array.prototype.map2 = function (callback) {
    const result = []
    for(let i = 0;i < this.length; i++){
        resultado.push(callback(this[i], i, this))
    }
    return result
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// Retornar um array apenas com os preços
const onlyPrice = value => JSON.parse(value).preco

console.log(carrinho.map2(onlyPrice))