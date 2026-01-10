function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; 
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const flashCards = [
        { question: "Q1 what are literals", answer: "constant values of numbers/text/true-false that are immutable" },
        { question: "Q2 difference between primitive datatype and reference datatype", answer: "primitive are built-in types like int, double, char, boolean (hold values directly in the stack) \n non-primitives/Reference are Object classes like String, Array, List etc. (hold addresses pointing at the value)" },
        { question: "Q3 difference between do-while loop and while loop", answer: "do-while loop will run through the body (hehe) at least once before checking the condition. while loop checks the condition first" }
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
