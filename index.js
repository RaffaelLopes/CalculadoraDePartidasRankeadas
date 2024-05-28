function calcularRankeadas(vitorias, derrotas) {
    // Calcula o saldo de Rankeadas
    const saldoRankeadas = vitorias - derrotas;
    let nivel;

    // Determina o nível do jogador com base no saldo de Rankeadas
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 10 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias > 20 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias > 50 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias > 80 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias > 90 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Retorna a mensagem com o saldo de vitórias e o nível do jogador
    return `O Herói tem um saldo de ${saldoRankeadas} está no nível de ${nivel}`;
}

// Exemplo de uso da função
const saldoVitorias = 95;
const saldoDerrotas = 30;
const resultado = calcularRankeadas(saldoVitorias, saldoDerrotas);
console.log(resultado);
