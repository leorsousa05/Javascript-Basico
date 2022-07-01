/* Estrutura Condicional 
if (se), else (senão), else if(senão se)

Operadores relacionais (usados com condicionais)
> maior que
< Menor que
>= Maior ou igual
<= menor ou igual
== igualdade
!= diferente */

// Exemplo 1: Condicional SIMPLES (IF)
let numero = 10;

if(numero > 5) {
    console.log("É maior");
}

else{
    console.log("É menor");
}

// Exemplo 2: condicional COMPOSTA (IF/ELSE)
let aluno = "João";
let nota1 = 8;
let nota2 = 7;
let media = (nota1 + nota2) / 2;

console.log(`Aluno: ${aluno}`);
console.log(`Notas: ${nota1} e ${nota2}`);
console.log(`Média: ${media.toFixed(2)}`);

let situacao; // undefined (indefinida)

let faltas = 14.5;

// if(media >= 7)

if (media >= 7 && faltas < 15)
{
    situacao = "Aprovado"
} else 
{
    situacao = "Reprovado"
}
console.log(situacao);


// Exemplo 3: Condicional ENCADEADA (IF, ELSE IF, ELSE)
let desempenho;
if(media < 3)
{
    desempenho = "Péssimo";
} else if(media < 5){
    desempenho = "Ruim";
} else if(media < 9){
    desempenho = "Bom";
} else {
    desempenho = "Ótimo";
}
console.log(desempenho
    )

// Exemplo 4: Operador Ternário.
let notas = 3;

// No operador ternário, colocamos direto a condição
// sendo assim o operador "?" significa "então", exemplo:
// notas <= 5 ? "você repetiu de ano"
// Se nota menor ou igual a 5 ENTÃO "Você repetiu de ano"
// E logo após, obrigatoriamente, colocamos o operador ":"
// Que é o "else" das condicionais, assim temos uma condicional
// Em um só linha.
console.log(notas <= 5 ? "Você repetiu de ano" : "Você passou de ano" )

// Caso queira fazer uma condicional com só uma condição, então
// usamos o "&&" e assim só ira fazer uma condição
notas <= 5 && "Você repetiu de ano."
