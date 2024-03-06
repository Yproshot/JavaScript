//Tendo em vista o código abaixo qual a maneira mais simples para a criação de uma instância de pessoa?
    class Pessoa {
        nome;
        idade;

        constructor(nome, idade) {
            this.nome = nome;
            this.idade = idade;
        }
    }

    new Pessoa('Vitor', 25);
    console.log(Pessoa);