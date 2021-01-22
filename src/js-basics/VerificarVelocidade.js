// Exercício que deve calcular a multa recebida em cada infração de trânsito
// Velocidade máxima = 60
// a cada 5km acima do limite você ganha 1 ponto
// Math.Floor() arredonda casa decimal para baixo
// caso pontos maior que 12 -> 'Carteira Suspensa'

let resultado = verificarVelocidade(60);
console.log(resultado);

function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 60;
    const kmPorPonto = 5;

    if (velocidade <= velocidadeMaxima) return 'Tá suave';
    
    const pontos = Math.floor((velocidade - 60) / kmPorPonto);
    
    if (pontos > 12) return 'Carteira suspensa';

    return 'A infração corresponde à ' + pontos + ' ponto(s) na carteira.';

}