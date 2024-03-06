
class Carro {

    marca;
    cor;
    gastoKm;


    constructor(marca, cor, gastoKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoKm = gastoKm;
    }

    valorGasto(distancia, valorCombustivel) {
        return ('O valor gasto será de R$ ' + ((distancia * this.gastoKm) * valorCombustivel).toFixed(2));
    }

}

const clio = new Carro('renault', 'cinza', 1 / 11);

/*1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.*/

console.log(clio.valorGasto(100, 5.89));

