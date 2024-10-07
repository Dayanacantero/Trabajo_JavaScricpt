// Seleccionar elementos del DOM
const grid = document.getElementById('grid');
const scoreDisplay = document.getElementById('score');
const resetButton = document.getElementById('reset-button');

let cards = [];
let flippedCards = [];
let score = 0;


const cardImages = [
    'images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg', 'images/image4.jpg',
    'images/image5.jpg', 'images/image6.jpg', 'images/image7.jpg', 'images/image8.jpg',
    'images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg', 'images/image4.jpg',
    'images/image5.jpg', 'images/image6.jpg', 'images/image7.jpg', 'images/image8.jpg'
];

// Función para crear las cartas
function createCards() {
    cards = cardImages.sort(() => 0.5 - Math.random()).map(image => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <img src="${image}" alt="Card Image">
                </div>
                <div class="card-back"></div>
            </div>
        `;
        card.addEventListener('click', flipCard);
        return card;
    });
    grid.innerHTML = '';
    cards.forEach(card => grid.appendChild(card));
}

// Función para voltear la carta
function flipCard() {
    if (flippedCards.length < 2 && !this.classList.contains('flipped')) {
        this.classList.add('flipped');
        flippedCards.push(this);
        if (flippedCards.length === 2) {
            checkMatch();
        }
    }
}

// Función para comprobar si hay un par
function checkMatch() {
    score++;
    scoreDisplay.textContent = `Intentos: ${score}`;
    
    const [firstCard, secondCard] = flippedCards;
    const firstImage = firstCard.querySelector('.card-front img').src;
    const secondImage = secondCard.querySelector('.card-front img').src;

    if (firstImage === secondImage) {
        // Par encontrado
        flippedCards = [];
    } else {
        // No es un par, volver a voltear
        setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            flippedCards = [];
        }, 1000);
    }
}

// Función para reiniciar el juego
function resetGame() {
    score = 0;
    scoreDisplay.textContent = `Intentos: ${score}`;
    createCards();
}

// Event listener para el botón de reinicio
resetButton.addEventListener('click', resetGame);

// Iniciar el juego
createCards();
