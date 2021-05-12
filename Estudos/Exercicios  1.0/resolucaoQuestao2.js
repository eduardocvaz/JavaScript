function tipoTriangulo(x,y,z){
    if (x == y && x == z) {
        console.log("Equilátero")
    }else if (x == y && x != z || z == y && x != z || z == x && x != y){
        console.log("Isósceles")
    }else if (x != y && x != z) {
        console.log("Escaleno")
    }
}

tipoTriangulo(10,10,10)
tipoTriangulo(5,10,10)
tipoTriangulo(10,5,10)
tipoTriangulo(10,10,5)
tipoTriangulo(10,5,2)