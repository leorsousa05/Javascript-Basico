/* Alt + Shift + A 
        Comentário de multiplas linhas*/

        // CTRL + ;  Comentário de linha única

        // Comando de saída de dados

        console.log("hello, world yeeeah");

        /* Variáveis e Constantes
        Espaços identificados na memória para
        armazenar dados temporariamente */

        // Variável: valor que pode mudar
        // Obs.: antigamente, era usado "var"
        let ano = 2022;

        // Constante: Valor imutável (não muda)
        // const aluno = "Thiago";
        const aluno = prompt("Nome do seu pai de 4");

        console.log(ano)
        console.log(aluno)

        console.log(aluno, ano)

        /* Operações matemáticas
        + (adição)
        - (subtração)s
        / (divisão)
        * (multiplicação) */

        let preco = 1500;
        let desconto = 250;
        let precofinal = preco - desconto;

        console.log(preco, desconto, precofinal);

        let produto = "TV Led";
        /* A TV Led custava 1500 reais. */

        // 1a forma (tradicional) - CONCATENAÇÃO
        console.log("A "+produto + " custava "+ preco + " reais.");

        // 2ª forma (moderna) - Template string/Literal
        console.log(`A ${produto} custava ${preco} reais.`)

