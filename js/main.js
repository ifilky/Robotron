
const controle = document.querySelectorAll("[data-controle]"); //controladores
const estatisticas = document.querySelectorAll("[data-estatistica]") // atributos
const cores = document.querySelectorAll("[data-cor]") //buttons
const robo = document.getElementById("robotron") //imagem do robô
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
} //objeto


cores.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        alteraCor(evento.target.dataset.cor);
    })
})

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatisticas(evento.target.dataset.peca);
    })
});

function manipulaDados(operacao, controle){
    const peca = controle.querySelector("[data-contador]");

    if (operacao === "-"){
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}

function atualizaEstatisticas(peca){
    estatisticas.forEach( (elemento) => {
        /* console.log(elemento.dataset.estatistica)
        console.log(elemento.textContent)
        console.log(pecas[peca][elemento.dataset.estatistica]) */
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
    } )
}

function alteraCor (cor){
    robo.src="img/Robotron 2000 - " + cor + ".png";
}
