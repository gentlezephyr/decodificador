function encriptarTexto() {
    let palavraRecebida = document.querySelector('#campoTexto');
    let saidaTexto = document.querySelector('.saidaTexto');
    let novaPalavra = palavraRecebida.value;

    novaPalavra = novaPalavra
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    saidaTexto.innerHTML = novaPalavra;
};

function copiarTexto() {
    let saidaTexto = document.querySelector('.saidaTexto');
  
    let range = document.createRange();
    range.selectNode(saidaTexto);
  
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
  
    document.execCommand('copy');
  
    window.getSelection().removeAllRanges();
};

function desencriptarTexto() {
    let palavraRecebida = document.querySelector('#campoTexto');
    let saidaTexto = document.querySelector('.saidaTexto');
    let novaPalavra = palavraRecebida.value;

    novaPalavra = novaPalavra
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    saidaTexto.innerHTML = novaPalavra;
};