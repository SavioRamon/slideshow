let currentSlide = 0;
let imageTot = 0;
newMargin = 0;

ajax('images.json', 'GET', (result) => {
    let images = JSON.parse(result);
    imageTot = images.length;
    images.map((image) => {
        document.querySelector('.tela').innerHTML += 
            `<div class="item">
                <img class="img" src="${image.url}" alt="">
                <div class="informacoes">
                    <h3 class="informacoes--nome">${image.informacoes.nome}</h3>
                    <p class="informacoes--posicao">${image.informacoes.posicao}</p>   
                </div>
            </div>`
    })
    document.querySelector('.tela').style.width = `calc(100vw * ${imageTot})`;
})

function updateMargin() {
    let newMargin = currentSlide * document.querySelector('.item').clientWidth;
    document.querySelector('.tela').style.marginLeft = `-${newMargin}px`;
}


function goPrev() {
    currentSlide = (currentSlide > 0 ? currentSlide : imageTot) - 1;
    updateMargin();
}


function goNext() {
    currentSlide = currentSlide >= (imageTot - 1) ? 0: currentSlide + 1;
    updateMargin();
}

setInterval(goNext, 5000)


