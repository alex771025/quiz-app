const questionText = document.getElementById("questionText");
const answersContainer = document.getElementById("answersContainer");
const resultText = document.getElementById("resultText");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");
const questionCounter = document.getElementById("questionCounter");



const questions = [
    {
        text: "Коя е столицата на Малта?",
        answers: ["Дубай", "Ла Валета", "Мадрид"],
        correctIndex: 1
    },
    {
        text: "Къде се намира Балкански полуостров?",
        answers: ["В Европа", "В Австралия", "В Южна Америка"],
        correctIndex: 0
    },
    {
        text: "Кой е най-високият връх в света?",
        answers: ["Всички са ми еднакво високи", "Мусала", "Еверест"],
        correctIndex: 2
    },
    {
        text: "Откъде извира р.Дунав?",
        answers: ["За първи път чувам за тази река", "Шварцвалд", "Витоша"],
        correctIndex: 1
    },
    {
        text: "Къде се намира държавата Сенегал?",
        answers: ["Нека не си измисляме държави", "Африка", "Азия"],
        correctIndex: 1
    }
        
]

let currentQuestionIndex = 0;
let hasAnswered = false;
let score = 0;

function showQuestion() {
    hasAnswered = false;
    nextBtn.disabled = true;
    answersContainer.textContent = "";
    resultText.textContent = "";
    resultText.classList.remove("correct", "incorrect");

    questionCounter.textContent = `Въпрос ${currentQuestionIndex + 1} от ${questions.length}`
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.text;

    currentQuestion.answers.forEach((answer, index) => {
        const answerBtn = document.createElement("button");
        answerBtn.addEventListener("click", () => {
            if (hasAnswered === true) {
                return;
            }
            hasAnswered = true;
            nextBtn.disabled = false;

            if (index === currentQuestion.correctIndex) {
                resultText.textContent = "Верен отговор";
                resultText.classList.add("correct");
                answerBtn.classList.add("correct");
                score++;
            } else {
                resultText.textContent = "Грешен отговор";
                resultText.classList.add("incorrect");
                answerBtn.classList.add("incorrect");
            }
        })
        answerBtn.textContent = answer;
        answersContainer.appendChild(answerBtn);
    });
}
nextBtn.addEventListener("click", () => {

    nextBtn.disabled = true;
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion()
    } else {
        resultText.textContent = `Край: Натрупани точки: ${score} за брой въпроси ${questions.length}`;
        answersContainer.textContent = "";
        nextBtn.disabled = true;
        questionText.textContent = "";
        questionCounter.textContent = "";
    }
})
restartBtn.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
})

showQuestion();