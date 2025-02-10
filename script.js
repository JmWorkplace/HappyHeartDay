function toggleCards() {
    let envelope = document.querySelector('.envelope');
    let audio = document.querySelector('#birthday-audio');
    let balloonVideo = document.querySelector('#balloon-video');
    
    if (!envelope.classList.contains('open')) {
        envelope.classList.add('open');
        launchConfetti(); // Trigger confetti animation
        launchBalloons(); // Trigger balloon animation
        audio.play(); // Play birthday song
    } else if (!envelope.classList.contains('second')) {
        envelope.classList.add('second');
        launchFlowerPetals(); // Trigger flower petal animation
    }
}

function launchConfetti() {
    confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.6 }
    });
}

function launchFlowerPetals() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff69b4', '#ffb6c1', '#ff1493'],
        shapes: ['circle'],
        scalar: 1.2,
        gravity: 0.5
    });
}

function launchBalloons() {
    let balloonVideo = document.querySelector('#balloon-video');
    balloonVideo.classList.remove('hidden');
    balloonVideo.play();
    setTimeout(() => {
        balloonVideo.classList.add('hidden');
    }, 5000); // Hide video after 5 seconds
}