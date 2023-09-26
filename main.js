const botoes = document.getElementsByClassName("botaoEscolha");

const btnAdversario = document.getElementById("btnAdversario");
const divAdversario = document.getElementById("divAdversario");
const colAdversario = document.getElementById("colAdversario");

const outResultado = document.getElementById("resultado");
const outPlacar = document.getElementById("placar");

let placar = Number(localStorage.getItem("placar"));
if (!placar) {
    placar = 0;
}
escrevePlacar()

objValores = {
    "Pedra": '<i class="fa-regular fa-hand-back-fist"></i>',
    "Papel": '<i class="fa-regular fa-hand"></i>',
    "Tesoura": '<i class="fa-regular fa-hand-scissors"></i>'
}

function jogar(valor) {
    let resultado;
    const opcoes = Object.keys(objValores);
    const adversario = "pedra"
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
    
    placar += resultado;
    if (placar < 0){
        placar = 0;
    }
    localStorage.setItem("placar", placar)
    escrevePlacar();
    if (resultado === 0) {
        outResultado.textContent = "Empate";
    } else if (resultado === 1) {
        outResultado.textContent = "Vitória!";
    } else if (resultado === -1) {
        outResultado.textContent = "Derrota";
    }

    document.getElementById("botoesControle").style.display = "flex";
}

function mostraAdversario(opcao) {
    colAdversario.style.display = "flex";
    btnAdversario.innerHTML = objValores[opcao];
}

function escondeOutrasOpcoes(opcao) {
    for (let i = 0; i < botoes.length; i++){
        const botao = botoes[i];
        const value = botao.value;
        if (value === opcao) {
            botao.disabled = true;
        } else {
            botao.parentElement.style.display = 'none'
        }
    }
}

function limpaPlacar() {
    localStorage.removeItem("placar");
    placar = 0;
    escrevePlacar();
    continua();
}

function continua() {
    for (let i = 0; i < botoes.length; i++){
        const botao = botoes[i];
        botao.disabled = false;
        botao.parentElement.style.display = "block";
    }
    colAdversario.style.display = "none";
    document.getElementById("botoesControle").style.display = "none";
    outResultado.textContent = "";
}

function escrevePlacar() {
    outPlacar.textContent = "Placar: " + placar;
}
