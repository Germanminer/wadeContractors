const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    menuOpen.classList.toggle('hidden');
    menuClose.classList.toggle('hidden');
});
//Contact menu toggle
const contactBtn = document.getElementById('contact-btn');
const contactOverlay = document.getElementById('contact-overlay');
const closeContact = document.getElementById('close-contact');
const contactPanel = document.getElementById('contact-panel');
//Open popout
contactBtn.addEventListener('click', () => {
    contactOverlay.classList.remove('hidden');
    setTimeout(()=>{
        contactPanel.classList.remove('translate-x-full');

    },10)
})
//Close popout
function closePanel(){
    contactPanel.classList.add('translate-x-full');
    setTimeout(()=>{
        contactOverlay.classList.add('hidden');
    },250)
}
closeContact.addEventListener('click',closePanel);
contactOverlay.addEventListener('click', (e) => {
    if(e.target===contactOverlay) {
        closePanel();
    }
})



//Hero Slideshow
const slides = document.querySelectorAll('#slides > div');
const slideCount = slides.length;
let currentIndex = 0;
function updateSlide() {
    slides.forEach((slide,i) => {
        const img = slide.querySelector('img');
        const text= slide.querySelector('p');

        slide.classList.toggle('opacity-100',i===currentIndex);
        slide.classList.toggle('opacity-0',i!==currentIndex);
    })
}
function nextSlide() {
    currentIndex = (currentIndex+1) % slideCount;
    updateSlide();
}
let slideTimer = setInterval(nextSlide, 4000);
updateSlide();