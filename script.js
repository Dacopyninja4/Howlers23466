document.addEventListener('keydown', function(event) {
    if (event.key === '=') { // Check if the pressed key is "="
        const music = document.getElementById('backgroundMusic');
        music.play(); // Play the music
    }
});