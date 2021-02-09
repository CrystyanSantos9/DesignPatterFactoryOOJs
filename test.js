function contar(name){
    let count = 0
    return{
        count:()=>count++,
    }
}

let data = ['a','b','c']

const valor = contar('linha')
const valor2 = contar('linha2')
const valor3 = contar('linha')

console.log(valor.count())
console.log(valor.count())
console.log(valor.count())
