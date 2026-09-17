let nome;

const nomeNulo = null;

const aluno = {
    id: 123213,
    nome: "João",
    ativo: true,
    pos: null,
    dataNascimento: "26/11/1998",
    endereco: {
        rua: "Elias Abraao",
        numero: 2321,
        bairro: "Paulo Godoy",
        cidade: "Cascavel"
    },
}

// + - / *
// =
// && - e
// || OU
function soma(n1, n2) {
    return n1 + n2;
}

console.log(soma(2, 40));
//() => o que você quer executar

const valor1 = "2";
const valor2 = 2;

//dois igual = = checa apenas valor
if (valor1 == valor2) {
    console.log("É igual!!")
}

//três igual = = = checar tipo e valor
if (valor1 === valor2) {
    console.log("É igual!!")
}

const frutas = ["🍊", "🍉", "🍇", "🍌"];

frutas.forEach(fruta => console.log(fruta))