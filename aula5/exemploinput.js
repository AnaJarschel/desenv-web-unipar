// Importa o módulo readline
const readline = require('readline');

// Configura a interface de entrada e saída
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Exemplo de como fazer uma pergunta
rl.question('Digite a opção desejada\n[1] Dados da Conta\n[2] Saldo: ', (resposta) => {
    let saldo = 40;

    if (resposta == "2") {
        console.log("Seu saldo é: " + saldo)
    }
    console.log(`Você escolheu a opção: ${resposta}`);
    // Se for pedir um valor financeiro, lembre-se de converter a string para número!
    // Exemplo: const valor = parseFloat(resposta);

    // Para fechar o programa quando terminar, use:
    // rl.close();
});