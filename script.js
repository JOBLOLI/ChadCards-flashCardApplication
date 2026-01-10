function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; 
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const flashCards = [
        { question: "Q1", answer: "A1" },
        { question: "Q2", answer: "A2" },
        { question: "Q3", answer: "A3" }
        // ...more questions and answers here
    ];

    // Shuffle the questions 
    shuffleArray(flashCards);

    let currentCard = 0;
    const flashcardElement = document.getElementById('flashcard');
    const questionElement = document.getElementById('question');
    const answerElement = document.getElementById('answer');

    function displayCard() {
        questionElement.textContent = flashCards[currentCard].question;
        answerElement.textContent = flashCards[currentCard].answer;
        flashcardElement.classList.remove('is-flipped');
    }

    document.getElementById('flip-card').addEventListener('click', () => {
        flashcardElement.classList.toggle('is-flipped');
    });

    document.getElementById('next-card').addEventListener('click', () => {
        currentCard = (currentCard + 1) % flashCards.length;
        displayCard();
    });

    displayCard();
});
