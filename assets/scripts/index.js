function encriptarTexto() {
    let palavraRecebida = document.querySelector('#campoTexto');
    let saidaTexto = document.querySelector('.saidaTexto');
    let modalCodificado = document.querySelector('.modal1');
    let novaPalavra = palavraRecebida.value;

    if (palavraRecebida.value != "") {
        novaPalavra = novaPalavra
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");

        saidaTexto.innerHTML = novaPalavra;

        modalCodificado.style.display = "block";
        const timeout = 800;
        setTimeout(() => {
            modalCodificado.style.display = "none";
        }, timeout);
    }
};

function copiarTexto() {
    let saidaTexto = document.querySelector('.saidaTexto');
    let modalCodificado = document.querySelector('.modal3');

    if (saidaTexto.innerHTML != "") {
        let range = document.createRange();
        range.selectNode(saidaTexto);

        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);

        document.execCommand('copy');

        window.getSelection().removeAllRanges();

        modalCodificado.style.display = "block";
        const timeout = 800;
        setTimeout(() => {
            modalCodificado.style.display = "none";
        }, timeout);
    }
};

function desencriptarTexto() {
    let palavraRecebida = document.querySelector('#campoTexto');
    let saidaTexto = document.querySelector('.saidaTexto');
    let modalCodificado = document.querySelector('.modal2');
    let novaPalavra = palavraRecebida.value;

    if (palavraRecebida.value != "") {
        novaPalavra = novaPalavra
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");

        saidaTexto.innerHTML = novaPalavra;

        modalCodificado.style.display = "block";
        const timeout = 800;
        setTimeout(() => {
            modalCodificado.style.display = "none";
        }, timeout);
    }
};

function limparTexto() {
    document.querySelector('#campoTexto').value = "";
    document.querySelector('.saidaTexto').innerHTML = "";
}

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', './assets/scripts/particlesjs-config.json', function () {
    console.log('callback - particles.js config loaded');
});