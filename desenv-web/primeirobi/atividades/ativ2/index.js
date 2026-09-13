const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Meus dados da conta
const conta = {
    nome: "Ana Carolina Jarschel",
    agencia: "1234",
    numero: "56789-0"
};

// Meu saldo inicial
let saldo = 5000.00;

// Valores em Reais
function formatarMoeda(valor) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(valor);
}

function mostrarMenu() {
    console.log("\n==============================");
    console.log("       BANCO DO DESIGNER        ");
    console.log("==============================");
    console.log("1 - Consulte seus dados da conta");
    console.log("2 - Consulte seu saldo atual");
    console.log("3 - Realizar débito em conta");
    console.log("4 - Realizar crédito em conta");
    console.log("0 - Sair");
    console.log("==============================");

    rl.question("Escolha uma opção: ", (opcao) => {
        switch (opcao) {
            case "1":
                consultarConta();
                break;

            case "2":
                consultarSaldo();
                break;

            case "3":
                realizarDebito();
                break;

            case "4":
                realizarCredito();
                break;

            case "0":
                console.log("\nAgradeçemos por usar o Banco do Designer. Volte logo!");
                rl.close();
                break;

            default:
                console.log("\nOpção inválida!");
                mostrarMenu();
        }
    });
}

// Opção 1 - Consulte seus dados da conta
function consultarConta() {
    console.log("\n--- DADOS DA CONTA ---");
    console.log(`Nome do Titular: ${conta.nome}`);
    console.log(`Número da Agência: ${conta.agencia}`);
    console.log(`Número da Conta: ${conta.numero}`);

    mostrarMenu();
}

// Opção 2 - Consulte seu saldo atual
function consultarSaldo() {
    console.log("\n--- SALDO ---");
    console.log(`Seu saldo atual: ${formatarMoeda(saldo)}`);

    mostrarMenu();
}

// Opção 3 - Realizar débito em conta
function realizarDebito() {
    rl.question("\nDigite o valor do débito que deseja realizar: R$ ", (valor) => {
        const valorDebito = parseFloat(valor);

        if (isNaN(valorDebito) || valorDebito <= 0) {
            console.log("Digite um valor válido.");
            realizarDebito();
            return;
        }

        if (valorDebito > saldo) {
            console.log("\nSaldo insuficiente!");
            console.log(`Saldo disponível: ${formatarMoeda(saldo)}`);
            mostrarMenu();
            return;
        }

        saldo -= valorDebito;

        console.log("\nOperação realizado com sucesso!");
        console.log(`Valor debitado da conta: ${formatarMoeda(valorDebito)}`);
        console.log(`Novo saldo da conta: ${formatarMoeda(saldo)}`);

        mostrarMenu();
    });
}

// Opção 4 - Realizar crédito em conta
function realizarCredito() {
    rl.question("\nDigite o valor do crédito: R$ ", (valor) => {
        const valorCredito = parseFloat(valor);

        if (isNaN(valorCredito) || valorCredito <= 0) {
            console.log("Digite um valor válido.");
            realizarCredito();
            return;
        }

        saldo += valorCredito;

        console.log("\nCrédito realizado com sucesso!");
        console.log(`Valor creditado da conta: ${formatarMoeda(valorCredito)}`);
        console.log(`Novo saldo da conta: ${formatarMoeda(saldo)}`);

        mostrarMenu();
    });
}

mostrarMenu();