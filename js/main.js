function toggleVideo(){
    const trailer = document.querySelector('.trailer');
    trailer.classList.toggle('active')
}

ScrollReveal({ 
    reset: true,
    distance: '60px',
    duraton: 2500,
    delay: 400
});

ScrollReveal().reveal('.title', { delay: 500, origin:'left' });
ScrollReveal().reveal('.about_info', { delay: 700, origin:'bottom' });
ScrollReveal().reveal('.about_img', { delay: 1000, origin:'right' });
ScrollReveal().reveal('.honeycomb li', { delay: 600, origin:'right', interval: 200 });
ScrollReveal().reveal('.input-group, button', { delay: 600, origin:'right' });

const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');

    for(i=0; i<items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
    }

    if(itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));

