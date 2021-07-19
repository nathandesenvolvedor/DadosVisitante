//Comando do pronpr, nome do visitante
var insiranome = prompt('Qual é seu nome?');
var insirasobrenome = prompt('Qual é seu sobrenome?');
var resultadonome = document.getElementById('nomeinput').value = insiranome + ' ' + insirasobrenome;
console.log(resultadonome);

//Comando prompt, idade do visitante
var idadevisitante = prompt('Qual sua idade?');
var textidadevisitante = 'anos';
var resultadoidade = document.getElementById('idade').value = idadevisitante + ' ' + textidadevisitante;
console.log(resultadoidade);

//Comando prompt, nacionalidade do visitante
var nacionalidadevisitante = prompt('Qual sua nacionalidade?');
var resultadonacionalidade = document.getElementById('nacionalidade').value = nacionalidadevisitante;
console.log(resultadonacionalidade);

//Resumo visitante
document.getElementById('resumotext').innerText = 'Seja bem-vindo ';
document.getElementById('resumonome').innerHTML = insiranome;
document.getElementById('resumotextsegundo').innerText = ' fiquei sabendo que você tem ';
document.getElementById('resumonome').innerHTML = insiranome;
document.getElementById('resumoidade').innerHTML = resultadoidade;
//Logica de idade (menor ou maior de idade)
if (idadevisitante >= 18) {
    document.getElementById('logicaidade').innerHTML = ' e já é maior de idade';
} else {
    document.getElementById('logicaidade').innerHTML = ' e ainda é menor de idade';
}

//botao comfirmar codico imagem
function btnconfirmar() {
    var inputdescreve = document.getElementById('imagecodico').value;
    var textcodico = 'KZDX9P'
    if (inputdescreve == textcodico) {
        confirm('Digitou correto');
    } else {
        alert('Digitou errado, tente novamente');
    }
}