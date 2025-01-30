//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigo = [];
let resultado = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();
    const lista = document.getElementById("listaAmigos");

    if (nome && !amigo.includes(nome)) {
        amigo.push(nome);
        const item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);
    }

    input.value = "";
    input.focus();
}

function sortearAmigo() {
    if (amigo.length < 3) {
        alert("Adicione pelo menos 3 amigos para o sorteio!");
        return;
    }

let sorteio = [...amigo];
resultado = [];

    for (let i=0; i < amigo.length; i++) {
        let disponiveis = sorteio.filter(nome => nome !== amigo[i]);

        if (disponiveis.length === 0) {
            alert("Não foi possivel realizar o sorteio. Tente novamente.");
            return sortearAmigo();
        }

        let sorteado = disponiveis[Math.floor(Math.random() * disponiveis.length)];
        resultado.push({ amigo: amigo[i], sorteado });

        let indice = sorteio.indexOf(sorteado);
        if (indice !== -1) {
            sorteio.splice(indice, 1);
        }

    }

    console.log("Sorteio realizado com sucesso!", resultado);

    exibirResultado();

}

function exibirResultado() {
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";

    const sorteioAleatorio = resultado[Math.floor(Math.random() * resultado.length)];

    const item = document.createElement("li");
    item.textContent = `Você tirou: ${sorteioAleatorio.sorteado}`;
    resultadoLista.appendChild(item);
}
