'use strict'; // MODO ESTRITO/RESTRITO

/*  Funções são blocos de código que
podem ser executados e reaproveitados em
praticamente qualquer parte da sua aplicação. 

Usar funções também é uma forma de separar
a lógica e organizar melhor sua programação*/

// Sintaxe tradicional
function linha() {
    console.log("----------------");
}

let curso = "Programador Web";
let escola = "Senac";
let ano = 2022;

console.log(`Curso: ${curso}`)
linha()
console.log(`Escola: ${escola}`);
linha()
console.log(`Ano ${ano}`);

// VERSÃO 1: sintaxe tradicional
/* function soma(value1, value2); {
    let total = value1 + value2;
    return total;
}; */

// VERSÃO 2: sintaxe ARROW FUNCTION (FUNÇÃO SETA/FLECHA)
const soma = (value1, value2) => {
    let total = value1 + value2;
    return total;
};

// Arrow Function com retorn IMPLÍCITO
const soma1 = (value1, value2) => value1 + value2;

console.log(soma(10,5));

let resultado = soma(100,50);
console.log(resultado);

if(resultado < 1000){
    console.log("Abaixo da meta")
}

linha();

// VERSÃO 1: tradicional
// function dobra(numero) {
//     let resultado = numero * 2;
//     return resultado;
// }

/* function dobra(numero) {
    return numero * 2;
}; */

// VERSÃO 2: 
/* const dobra = (numero) => {
    let resultado = numero * 2;
    return resultado;
}; */

/*
const dobra = (numero) => {
    return numero * 2
}; */

// Retorno IMPLÍCITO

const dobra = numero => numero *2;

console.log(dobra(10));
console.log(dobra(150));

linha();

let nota1 = 8.5,
    nota2 = 7.4;

const calculamedia = (n1, n2) => (n1 + n2) / 2;

console.log( calculamedia(nota1, nota2))

// Obs.: se não tem parâmetros, também precisa usar ()
const linha2 = () => console.log("*****")