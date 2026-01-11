function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; 
    }
}

document.addEventListener('DOMContentLoaded', () => {
    
    // Shuffle the questions 
    shuffleArray(flashCards);

    let currentCard = 0;
    const flashcardElement = document.getElementById('flashcard');
    const questionElement = document.getElementById('question');
    const answerElement = document.getElementById('answer');
    const prevButton = document.getElementById('previous-card');

    function displayCard() {
        questionElement.textContent = flashCards[currentCard].question;
        answerElement.textContent = flashCards[currentCard].answer;
        flashcardElement.classList.remove('is-flipped');

        // Disable Previous button on first card
        if (currentCard == 0) {
             prevButton.disabled = true;
        } else {
            prevButton.disabled = false;
        }

    }

    document.getElementById('flip-card').addEventListener('click', () => {
        flashcardElement.classList.toggle('is-flipped');
    });

    document.getElementById('next-card').addEventListener('click', () => {
        currentCard = (currentCard + 1) % flashCards.length;
        displayCard();
    });

    prevButton.addEventListener('click', () => {
        if (currentCard === 0) return;

        currentCard--;
        displayCard();
    });


    displayCard();
});
