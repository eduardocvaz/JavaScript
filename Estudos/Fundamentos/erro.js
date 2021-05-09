function tratarErroELancar(erro){
    //throw new Error("...")
    throw console.log(erro.name,':',erro.message, '\nProvavelmente o erro foi causado na linha onde ele mudar a letra para maiuscula')
}

function imprimirNomeGritado(obj){

    try {
        console.log(obj.name.toUpperCase() + '!!!')    
    } catch (e){
        tratarErroELancar(e)
    } finally{
        console.log('final')
    }
}

const obj = {nome: 'Roberto'}

imprimirNomeGritado(obj)