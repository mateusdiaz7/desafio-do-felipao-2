let resultadoFinal = totalDePartidas(114, 26)

function totalDePartidas(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    return saldoVitorias; 
}

if(resultadoFinal < 10) {
    console.log(`O Herói tem de saldo de: ${resultadoFinal} e está no nivél Ferro`)

} else if((resultadoFinal > 10) && (resultadoFinal <= 20)) {
    console.log(`O Herói tem de saldo de: ${resultadoFinal} e está no nivél Bronze`)

} else if((resultadoFinal > 20) && (resultadoFinal <= 50)) {
    console.log(`O Herói tem de saldo de: ${resultadoFinal} e está no nivél Prata`)

} else if((resultadoFinal > 50) && (resultadoFinal <= 80)) {
    console.log(`O Herói tem de saldo de: ${resultadoFinal} e está no nivél Ouro`)
    
} else if((resultadoFinal > 80) && (resultadoFinal <= 90)) {
    console.log(`O Herói tem de saldo de: ${resultadoFinal} e está no nivél Diamante`)

} else if((resultadoFinal > 90) && (resultadoFinal <= 100)) {
    console.log(`O Herói tem de saldo de: ${resultadoFinal} e está no nivél Lendário`)

} else {
    console.log(`O Herói tem de saldo de: ${resultadoFinal} e está no nivél Imortal`)
}