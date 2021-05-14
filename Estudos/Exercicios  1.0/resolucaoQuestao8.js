/**08)​Pedro joga N jogos de basquete por temporada.
 *  Para saber como está ele está progredindo,
 *  ele mantém registro de todos os as pontuações feitas por jogo.
 *  Após cada jogo ele anota no novo valor
 *  e confere se omesmo é maior ou menor que seu melhor e pior desempenho.
 *  Dada uma lista string = “pontuação1 pontuação2 pontuação3 etc..”,
 *  escreva uma função que ao recebê-la irá comparar os valores um a um 
 * e irá retornar um vetor com o número de vezes que ele bateu
 *  seu recorde de maior número de pontos e quando fez seu piorjogo. 
 * (Número do pior jogo).
 */


function pontuacao(stringPontuacoes) {
    let resultado = [0, 0]
    let record = stringPontuacoes[0]
    let maisBaixa = 100000

    stringPontuacoes = stringPontuacoes.split(',')

    for (let i = 1; i < stringPontuacoes.length; i++) {
        if (stringPontuacoes[i] > record) {
            record = stringPontuacoes[i]
            resultado[0]++
        }
        if (stringPontuacoes[i] < maisBaixa) {
            maisBaixa = stringPontuacoes[i]
            resultado[1] = i
        }
    }

    return `
    Vezes que superou o record:${resultado[0]}\n
    Numero da partida com pior resultado ${resultado[1] + 1}\n
    Melhor pontuação ${record}\n
    Pior pontuação ${maisBaixa}\n
    `
}

let stringPontuacoes = "30,40,20,4,51,25,42,38,56,0"

console.log(pontuacao(stringPontuacoes))
