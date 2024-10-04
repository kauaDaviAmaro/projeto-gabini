const initializeCountdown = (duration) => {
    let timer = duration;

    const elementHours = document.getElementById('hours');
    const elementMinutes = document.getElementById('minutes');
    const Seconds = document.getElementById('seconds');

    setInterval(() => {
        const hours = Math.floor(timer / 3600);
        const minutes = Math.floor((timer % 3600) / 60);
        const seconds = Math.floor(timer % 60);

        animateScroll(elementHours, hours);
        animateScroll(elementMinutes, minutes);
        animateScroll(Seconds, seconds);

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

const padZero = (value) => {
    return value.toString().padStart(2, '0');
}

const animateScroll = (element, value) => {
    element.innerHTML = padZero(value);
}

initializeCountdown(3600);

let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonialsCard');
const totalTestimonials = testimonials.length;
const testimonialsPerPage = 3;

const nextButton = document.querySelector('#next');
const prevButton = document.querySelector('#prev');

function showTestimonials() {
    const container = document.querySelector('.testimonialsWrapper');
    const offset = (currentIndex * testimonialsPerPage) * 100 / testimonialsPerPage;
    container.style.transform = `translateX(-${offset}%)`;

    prevButton.classList.toggle('active', currentIndex !== 0);
    nextButton.classList.toggle('active', currentIndex !== Math.ceil(totalTestimonials / testimonialsPerPage) - 1);

    prevButton.src = currentIndex === 0 ? 'imgs/desactiveArrow.svg' : 'imgs/activeArrow.svg';
    prevButton.style.transform = currentIndex === 0 ? '' : 'rotate(180deg)';
    
    nextButton.src = currentIndex === Math.ceil(totalTestimonials / testimonialsPerPage) - 1 ? 'imgs/desactiveArrow.svg' : 'imgs/activeArrow.svg';
    nextButton.style.transform = currentIndex === Math.ceil(totalTestimonials / testimonialsPerPage) - 1 ? 'rotate(180deg)' : '';
}


function nextTestimonial() {
    currentIndex = (currentIndex + 1) % Math.ceil(totalTestimonials / testimonialsPerPage);    
    showTestimonials();
}

function prevTestimonial() {
    currentIndex = (currentIndex - 1 + Math.ceil(totalTestimonials / testimonialsPerPage)) % Math.ceil(totalTestimonials / testimonialsPerPage);
    showTestimonials();
}

nextButton.addEventListener('click', nextTestimonial);
prevButton.addEventListener('click', prevTestimonial);

showTestimonials();

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