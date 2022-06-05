const kirby = document.querySelector('.kirby');
const pipe = document.querySelector('.pipe');
const screen = window.screen;
screen.orientation.lock('landscape');
const jump =() =>{
    kirby.classList.add('jump');
    setTimeout(()=>{
        kirby.classList.remove('jump');
    },500);
}

const loopGame = setInterval(()=>{
    const pipePosition = pipe.offsetLeft;
    const kirbyPosition = +window.getComputedStyle(kirby).bottom.replace('px','');
    console.log(screen);
    if(pipePosition <= 100 && pipePosition > 0 && kirbyPosition <= 100){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        kirby.style.animation = 'none';
        kirby.style.bottom = `${kirbyPosition}px`;
        kirby.src = './images/kirby-lost.webp';

        clearInterval(loopGame);
    }
},10);

document.addEventListener('keydown', jump);
document.addEventListener('touchstart',jump);