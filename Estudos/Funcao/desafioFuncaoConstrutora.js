function Pessoa(nome) {
    this.nome = nome
    this.falar= () => {
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p1 = new Pessoa('João')
p1.falar()

const Pessoa1 = nome =>{
    return {
        nome,
        falar: ()=>console.log(`Meu nome é ${nome}`)
    }
}
const p2 = Pessoa1("Joãozim")
p2.falar()