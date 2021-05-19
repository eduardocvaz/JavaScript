// tagged templates - processa o template dentro de uma função
function tag(parts, ...values) {
    console.log(parts)
    console.log(values)
    return 'Another String'
}

const student = 'Gui'
const situation = 'approved'
console.log(tag `${student} is ${situation}`)