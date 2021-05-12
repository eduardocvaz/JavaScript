function jurosSimples(capitalInicial,taxaJuros,tempoAplicacao){
    return capitalInicial + (capitalInicial * taxaJuros * tempoAplicacao)

}
function jurosComposto(capitalInicial,taxaJuros,tempoAplicacao){
    return (capitalInicial *(1+taxaJuros)**tempoAplicacao).toFixed(2)
}

console.log(jurosSimples(1200,0.2,15))
console.log(jurosComposto(1200,0.2,15))
