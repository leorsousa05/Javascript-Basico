/* Estruturas tradicionais:

while       -> enquanto
do/while    -> faça/enquanto
for         -> para
*/

// Exemplo loop while (enquanto)

console.log("while");

// Variável de controle do loop
/* Obs.: normalmente é chamada de i, j ou k */
let i = 1;

while(i <= 10) {
    console.log(`Valor de contador: ${i}`)
    i++; //incremento
};

console.log("---------------");

console.log("Do/While");

let j = 1; // Variável de controle
do {
    console.log(`J vale ${j}`)
    j++;
} while( j <= 3 ); // ou j < 4

console.log("--------------");

console.log('For');

for ( let i = 1; i<= 5; i++) /* for(Variável de controle; condição; atualização da variável)*/ {
    console.log(`I vale: ${i}`)
};

console.log("-------------");
console.log("Loop e Estrutura de Dados");

let alunos = ["Eduardo", "Vagner", "Thalia", "Claudio", "Jessica"];

console.log(alunos[4]);

for (let i = 0; i <= 4; i++) {
    console.log(alunos[i])
};

/* sort() ->  */

console.log("-------------");

console.log("loops exclusivos do JS");

// For/of: ótimo para Arrays
for(let aluno of alunos) {
    console.log(aluno)
}

// Objeto
let livro = {
    titulo: "Senhor dos Anéis",
    ano: 1954,
    volumes: 3
};

// for/in: ótimo para objetos

for(let dados in livro) {
    console.log(livro[dados]);
};