const redBlue = document.querySelector('#redBlue');
const bluePink = document.querySelector('#bluePink');

const selectedImg = document.createElement('img');
selectedImg.src = 'imgs/ok.svg';
selectedImg.style.width = '100%';
document.body.appendChild(selectedImg);
redBlue.appendChild(selectedImg);

bluePink.addEventListener('click', () => {
    document.querySelector('.carousel').style.transition = 'transform 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    document.querySelector('.carousel').style.transform = 'translateY(-40%)';
    
    bluePink.appendChild(selectedImg);
});

redBlue.addEventListener('click', () => {
    document.querySelector('.carousel').style.transition = 'transform 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    document.querySelector('.carousel').style.transform = 'translateY(50%)';

    redBlue.appendChild(selectedImg);
});