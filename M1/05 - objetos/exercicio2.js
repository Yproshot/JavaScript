/*
2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;
*/


class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    imc() {
        const resultado = ((this.peso / Math.pow(this.altura, 2)).toFixed(2));
    
        if ( resultado < 18.5) {
            return ('Abaixo do peso');
        } else if ( resultado >= 18.5 && resultado < 25) {
            return ('Peso normal');
        } else if ( resultado >= 25 && resultado < 30) {
            return ('Acima do peso');
        } else if ( resultado >= 30 && resultado < 40) {
            return ('Obeso');
        } else {
            return ('Obesidade grave');
        }
    }
}

const jose = new Pessoa('Jose', 70, 1.75);
console.log(jose.imc());

const Maicon = new Pessoa('Maicon', 65, 1.86);
console.log(Maicon.imc())
