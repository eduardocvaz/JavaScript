/**09)​ Construa uma função para um sistema de notas
 *  de uma instituição que possui a seguinte política declassificação:
 *  Todo aluno recebe uma nota de 0 a 100.
 *  Alunos com nota abaixo de 40 são reprovados
 * . As notas possuem a seguinte regra de arredondamento:
 *  Se a diferença entre a nota e o próximo múltiplo de 5 for menorque 3,
 *  arredondar a nota para esse próximo múltiplo de 5.
 *  Se a nota for abaixo de 38, não é feito nenhum arredondamento
 *  pois esta nota resulta na reprovação do aluno. 
 * Por exemplo, a nota 84 será arredondada para 85, 
 * mas a nota 29 não será arredondada por ser abaixo de 40
 *  e não ser possível arredondamento eficiente, ouseja,
 *  que evite a reprovação do aluno. No caso de a nota ser 38,
 *  o arredondamento é possível pois atingirá 40 e o aluno será aprovado.
 */
function processarNota(...notas){
    const resultado = []
    notas.forEach(function(nota,indice){
        if (nota > 100 || nota < 0) {
            resultado.push(`${indice+1}º ALUNO: Nota Invalida`)
        }else if (nota < 38) {
            resultado.push(`${indice+1}º ALUNO: Nota:${nota}, Situação:Reprovado`)
        }else{
            if (nota%5==0) {
                resultado.push(`${indice+1}º ALUNO: Nota:${nota}, Situação:Aprovado`)
            }else if (nota%5>=3) {
                resultado.push(`${indice+1}º ALUNO: Nota:${nota},Nota Arrendondada: ${nota-(nota%5)+5}, Situação:Aprovado`)
            }else{
                resultado.push(`${indice+1}º ALUNO: Nota:${nota}, Situação:Aprovado`)
            }
        }
    })
    return resultado
}

console.log(processarNota(-1,101,20,28,75,85,100,82,93,38,121,21,54,85,32,48,84,54,32,45,87,21,548))