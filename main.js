const btnPedra = document.getElementById("btnPedra");
const btnPapel = document.getElementById("btnPapel");
const btnTesoura = document.getElementById("btnTesoura");
const btnAdversario = document.getElementById("btnAdversario");

const divPedra = document.getElementById("divPedra");
const divPapel = document.getElementById("divPapel");
const divTesoura = document.getElementById("divTesoura");
const divAdversario = document.getElementById("divAdversario");

const colAdversario = document.getElementById("colAdversario");

objValores = {
    "Pedra": '<i class="fa-regular fa-hand-back-fist"></i>',
    "Papel": '<i class="fa-regular fa-hand"></i>',
    "Tesoura": '<i class="fa-regular fa-hand-scissors"></i>'
}

function jogar(valor) {
    let resultado;
    const opcoes = Object.keys(objValores);
    const adversario = opcoes[Math.floor(Math.random() * opcoes.length)];
    console.log(valor, adversario);
    mostraAdversario(adversario);
    escondeOutrasOpcoes(valor);
    // define vencedor
    if (valor === adversario) {
        resultado = 0; // empate
    } else {
        if (valor === "Pedra") {
            if (adversario === "Papel") {
                resultado = -1; // derrota
            } else { // adversario === "Tesoura"
                resultado = 1; // vitoria
            }
        } else if (valor === "Papel") {
            if (adversario === "Pedra") {
                resultado = 1; // vitoria
            } else { // adversario === "Tesoura"
                resultado = -1; // derrota
            }
        } else { // valor === "Tesoura"
            if (adversario === "Pedra") {
                resultado = -1 // derrota
            } else { //adversario === "Papel"
                resultado = 1; //vitoria
            }
        }
    }
    console.log(resultado)
    // escreve placar
    // desabilita botoes
}

function mostraAdversario(opcao) {
    colAdversario.style.display = "flex";
    btnAdversario.innerHTML = objValores[opcao];
}

function escondeOutrasOpcoes(opcao) {

}