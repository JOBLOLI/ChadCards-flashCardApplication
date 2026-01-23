function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; 
    }
}

document.addEventListener('DOMContentLoaded', () => {
 
    let activeCards = flashCards;
    shuffleArray(activeCards);

    let currentCard = 0;
    const flashcardElement = document.getElementById('flashcard');
    const questionElement = document.getElementById('question');
    const answerElement = document.getElementById('answer');
    const prevButton = document.getElementById('previous-card');
    const nextButton = document.getElementById('next-card');

    function displayCard() {
        questionElement.textContent = activeCards[currentCard].question;
        answerElement.textContent = activeCards[currentCard].answer;
        flashcardElement.classList.remove('is-flipped');

        if (currentCard == 0) {
             prevButton.disabled = true;
        } else {
            prevButton.disabled = false;
        }

    }

    const catButtons = document.querySelectorAll('.cat-btn');
    catButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // update active styles
            catButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // switch dataset
            const cat = btn.dataset.cat; 
            activeCards = (cat === "java") ? flashCards : (cat == "sql") ? sqlFlashCards : collectionFlashCards ;

            // reset + reshuffle for that category
            currentCard = 0;
            shuffleArray(activeCards);
            displayCard();
        });
    });


    document.getElementById('flip-card').addEventListener('click', () => {
        flashcardElement.classList.toggle('is-flipped');
    });

    nextButton.addEventListener('click', () => {
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
