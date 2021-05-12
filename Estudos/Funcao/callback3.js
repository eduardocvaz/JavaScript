//Exemplo de callback no browser
document.getElementsByTagName('body')[0].onclick = function (e){
    console.log('O Evento Ocorreu!')
}

let varificar = function(tempo){
    tempo = true
}
document.getElementsByTagName('body')[0].onclick = function (e){
    let tempo
    let myGreeting = setTimeout(function(tempo){
        tempo = true
    }, 2000)
    if (tempo==true) {
        window.open("http://www.google.com/", "minhaJanela", "height=200,width=200")
        tempo = false
    }
}