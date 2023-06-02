function leiaMais() {
    let pontos = document.querySelector('.pontos');
    let leiaMaisTexto = document.querySelector('.leiaMais');
    let btnLeiaMais = document.querySelector('.btnLeiaMais');

    if (pontos.style.display === 'none') {
        pontos.style.display = 'inline';
        leiaMaisTexto.style.display = 'none';
        btnLeiaMais.innerHTML = 'Read more';
    } else {
        pontos.style.display = 'none';
        leiaMaisTexto.style.display = 'inline';
        btnLeiaMais.innerHTML = 'Read less';
    }
}