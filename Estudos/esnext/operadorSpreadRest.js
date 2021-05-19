//Operador ... rest(juntar)/spread(espalhar)
// usar rest com parâmetro de função

// usar spread com objeto
const employee = { name: 'Maria', salary: 12348.99 }
const clone = { active: true, ...employee }
console.log(clone)

// usar spread com array
const groupA = ['João', 'Pedro', 'Gloria']
const finalGroup = ['Maria', ...groupA, 'Rafael']
console.log(finalGroup)