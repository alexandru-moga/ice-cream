// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Get the ice cream truck element
    const iceCreamTruck = document.getElementById('iceCreamTruck');
    // Get the audio element
    const iceCreamSound = document.getElementById('iceCreamSound');
    
    // Add click event listener to the truck
    iceCreamTruck.addEventListener('click', function() {
        // Play the sound
        iceCreamSound.play();
        
        // Add animation class
        iceCreamTruck.classList.add('bounce');
        
        // Remove animation class after animation completes
        setTimeout(function() {
            iceCreamTruck.classList.remove('bounce');
        }, 1000);
    });
    
    // Back to top button functionality
    const backToTopButton = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', () => {
        backToTopButton.classList.toggle('visible', window.scrollY > 300);
    });
    
    backToTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
