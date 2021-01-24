class Endereco {
    constructor(rua, cidade, cep) {
        this.rua = rua;
        this.cidade = cidade;
        this.cep = cep;
    }
    exibirEndereço() {
        return `Rua: ${this.rua}, Cidade: ${this.cidade}, CEP: ${this.cep}`
    }
} 

const end = new Endereco('QNH 10', 'Brasília', '72130600');
console.log(end.exibirEndereço()); // Rua: QNH 10, Cidade: Brasília, CEP: 72130600