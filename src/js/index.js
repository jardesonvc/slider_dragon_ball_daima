
console.log(document.querySelector('.botao-trailer'));

const botaoTrailer = document.querySelector('.botao-trailer');
const video = document.getElementById('video')

const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

botaoTrailer.addEventListener("click", () => {
    modal.classList.add('aberto'); 
    video.setAttribute('src', linkDoVideo);
})



const botaoFecharModal = document.querySelector('.fechar-modal');


botaoFecharModal.addEventListener('click', () => {
    modal.classList.remove('aberto');
    video.setAttribute('src', '')
})