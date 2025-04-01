document.addEventListener('DOMContentLoaded', function() {
    const iceCreamTruck = document.getElementById('iceCreamTruck');
    const iceCreamSound = document.getElementById('iceCreamSound');
    iceCreamTruck.addEventListener('click', function() {
        iceCreamSound.play();
        iceCreamTruck.classList.add('bounce');
        setTimeout(function() {
            iceCreamTruck.classList.remove('bounce');
        }, 1000);
    });
    const backToTopButton = document.querySelector('.back-to-top');
    window.addEventListener('scroll', () => {
        backToTopButton.classList.toggle('visible', window.scrollY > 300);
    });
    backToTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});