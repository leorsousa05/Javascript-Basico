// Exemplo 01
const subExemplo01 = document.querySelector('#subtitulo-exemplo01');
const msg = document.querySelector('#mensagem');

// Monitor/Ouvinte de Eventos
subExemplo01.addEventListener('click', function() {
    msg.textContent = 'Oláaaaaaa';
    msg.style.fontSize = "25px"
});

subExemplo01.addEventListener('dblclick', function() {
    msg.textContent = "";
});

// Exemplo 02: modo noturno
const botao = document.querySelector('#noturno');
const pagina = document.querySelector('body');

botao.addEventListener('click', function() {
    pagina.classList.toggle('modo-noturno');
    if (botao.textContent == 'Ativar') {
        botao.textContent = 'Desativar'
    } else {
        botao.textContent = 'Ativar'
    };
});

// Exemplo 03: simulação de cadastro
const formulario = document.querySelector("form");
const campoNome = document.querySelector('#nome');
const campoNota1 = document.querySelector('#nota1');
const campoNota2 = document.querySelector('#nota2');
const campoResultado = document.querySelector('#resultados');

// Detectar o acionamento do formulário
// Obs.: a função dentro do listener, é chamada de callback
formulario.addEventListener('submit', function(event) {
    /* Anulando o comportamento padrão do navegador
    (redirecionador de formulário) */
    event.preventDefault();

    // Capturar os dados digitados no campos
    let nome = campoNome.value;
    let nota1 = parseFloat(campoNota1.value);
    let nota2 = parseFloat(campoNota2.value);
    let media = (nota1 + nota2) / 2;

    if (media >= 7) {
        res = 'Aprovado'
    } else {
        res = 'Reprovado'
    }

    // 3) Criando elementos dinamicamente via JS

    // 3.1) Criar o elemento/tag

    let resultados = document.createElement("p");
    
    // 3.2) Montar o conteúdo da tag
    resultados.innerHTML = `<b>${nome}</b>: <i>${media}</i> - ${res}`;
    campoResultado.appendChild(resultados)

    formulario.reset()
});
