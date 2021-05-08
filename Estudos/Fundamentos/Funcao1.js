//função sem retorn 
function imprimirSoma(a,b){
    console.log(a+b)
}

imprimirSoma(2,3)
imprimirSoma(2)

//função com retorn
function soma(a,b=0){
    return a + b
}

console.log(soma(2,4))
console.log(soma(2))
console.log(soma())