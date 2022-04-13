/* Funções (ou métodos) de acesso/seleção ao DOM

-getElementById     -> seleciona UM elemento atrvés do id
-querySelector      -> seleciona UM elemento através de um seletor
-querySelectorAll   -> seleciona VÁRIOS elementos através de seletor*/

// Exemplos

const titulo = document.querySelector('#titulo-principal');
const subtitulos = document.querySelectorAll("h2")

console.log(titulo);
console.log(subtitulos)
console.log(subtitulos[0])

// Leitura do conteúdo
console.log(titulo.textContent)
console.log(subtitulos[1].textContent)

// Alteração do conteúdo
titulo.textContent = "Olá DOM, meu velho amigo."

// Alterar conteúdo mas colocando tags
subtitulos[0].innerHTML = "<i>Aprendendo DOM</i>"

// 1) Inline
const pagina = document.querySelector("body");
pagina.style.backgroundColor = 'lightblue';
pagina.style.fontFamily = 'Verdana';
pagina.style.margin = 0;


// 2) classe
const primeiroItem = document.querySelector('#lista-editores li:first-child');
console.log(primeiroItem);

primeiroItem.classList.add("destaque-item")