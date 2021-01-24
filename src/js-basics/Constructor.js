// Constructor

class Celular {
    constructor(marcaCelular, tamanhoTela, capacidadeBateria) {
        this.marca = marcaCelular;
        this.tamanhoTela = tamanhoTela;
        this.capacidadeBateria = capacidadeBateria;
    }
}

var celular = new Celular('Azus', 500, 4500);
console.log(celular);