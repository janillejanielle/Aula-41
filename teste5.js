var pessoa = '{"nome":"Joao","idade":65}'

console.log("Tipo da variável ANTES do parse: ",typeof(pessoa))

var idade = pessoa.idade

console.log("Idade ANTES do parse: ", idade)

var pessoa_Obj = JSON.parse(pessoa)

console.log("Tipo da variável DEPOIS do parse: ",typeof(pessoa_Obj))

var idade = pessoa_Obj.idade

console.log("Idade DEPOIS do parse: ", idade)