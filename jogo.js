//  Pedra = 1
// Papel = 2
// Tesoura = 3

function jogar(escolhaJogador) {
    const opcoes = {
        1: "🪨 Pedra",
        2: "🧻 Papel",
        3: "✂️ Tesoura"
    };

    const escolhaComputador = Math.floor(Math.random() * 3) + 1;

    let resultado = "";

    if (escolhaJogador === escolhaComputador) {
        resultado = "⚖️ Empate!";
    } else if (
        (escolhaJogador === 1 && escolhaComputador === 3) ||
        (escolhaJogador === 2 && escolhaComputador === 1) ||
        (escolhaJogador === 3 && escolhaComputador === 2)
    ) {
        resultado = "🏆 Você venceu!";
    } else {
        resultado = "💻 Computador venceu!";
    }

    document.getElementById("resultado").innerHTML = ` 
        Você escolheu: ${opcoes[escolhaJogador]} <br>
        Computador escolheu: ${opcoes[escolhaComputador]} <br>
        <strong>${resultado}</strong>
    `;
}
