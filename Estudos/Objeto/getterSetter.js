const sequencia = {
    _valor: 1, //convenção
    get valor(){ return this._valor++},
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }else{
            console.log(`Valor inferior ao atual: ${this._valor}, digite um valor superior`)
        }
    }
}


console.log(sequencia.valor,sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor,sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor,sequencia.valor)