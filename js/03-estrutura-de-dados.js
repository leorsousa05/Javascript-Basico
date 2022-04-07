/* Estrturas de Dados no JavaScript

ARRAY (VETOR)

*/

let alunos = ["Tiago", "João", "Marília", "Vagner"];

// Acessando o aluno armazenado no índice
console.log(alunos[1]); // João
console.log(alunos[3]); // Vagner

console.log(alunos);

/* Exercício Array:
Crie um array contendo os seguintes dados de uma pessoa:
-Nome e sobrenome
-Idade
-Cidade
-Estado */

let pessoa = ["Leonardo Ribeiro", 16, "São Paulo", "SP"];

/* Mostre uma frase no console conforme o exemplo abaixo:
Fulano da Silva é da cidade de São Paulo e tem 20 anos. */

console.log(`${pessoa[0]} é de ${pessoa[2]}, ${pessoa[3]} e tem ${pessoa[1]} anos.`);

console.log("-----------------")

/* OBJETO
Lista de dados não-indexados */

let filme = {
    // Propriedade: valor
    titulo: "Homem Aranha",
    ano: 2021,
    genero: "Ação/Ficção",
    classificacao: 16,
};

console.log(filme.titulo, filme.genero, filme.ano);
console.log(`${filme.titulo} foi lançado em ${filme.ano}com a classificação de ${filme.classificacao}`);

/* Exercício de Objeto
1) Crie um novo objeto contendo os dados (fictícios)
de um pedido de uma loja virtual. Exemplo:
-Data do pedido
-Produto Comprado
-Preço do Pedido
-Prazo de entrega */

let produto = {
    data: "07/04/2022",
    compra: "Banana",
    preco: 5.99,
    prazo: 7,
};

/* 2) Mostre uma frase contendo as seguintes informações? O produto XYZ foi comprado em 07/04/2022 com entrega em 7 dias úteis */

console.log(`O produto ${produto.compra} de preço R$${produto.preco} foi comprado em ${produto.data} com entrega em ${produto.prazo} dias úteis.`);