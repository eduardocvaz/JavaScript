function criarProduto(nome,preco,desconto=10){
    return {nome,preco,desconto}
}

console.log(criarProduto('refri',120,5))