console.log("funções");

/*  Funções são blocos de código que
podem ser executados e reaproveitados em
praticamente qualquer parte da sua aplicação. 

Usar funções também é uma forma de separar
a lógica e organizar melhor sua programação*/

// Sintaxe tradicional
function linha() {
    console.log("----------------");
}

export { linha};

let curso = "Programador Web";
let escola = "Senac";
let ano = 2022;

console.log(`Curso: ${curso}`)
linha()
console.log(`Escola: ${escola}`);
linha()
console.log(`Ano ${ano}`);


function soma(value1, value2); {
    let total = value1 + value2
};

console.log(soma(10,5));

let resultado = soma(100,50);
console.log(resultado);

if(resultado < 1000){
    console.log("Abaixo da meta")
}