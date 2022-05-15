var frutas = '["uva", "maçã", "pera"]'

var frutasObj = JSON.parse(frutas)

console.log(frutasObj[0])

//array de objetos
var população = [

    //população[0]
    {"nome":"Joao","idade":25},

    //população[1]
    {"nome":"Jose","idade":23}
]


console.log("População: ",população)

//obtendo uma pessoa da população
console.log("Pessoa: ", população[0])

//obtendo uma propriedade de uma pessoa da população
console.log("Nome da pessoa:", população[1].nome)