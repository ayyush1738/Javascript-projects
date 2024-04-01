document.addEventListener('DOMContentLoaded', function() {
    const questions = [
        {
            question: "Which is the largest animal in the world?",
            answers: [
                { text:  "Shark", correct: false},
                { text:  "Blue Whale", correct: true},
                { text:  "Elephant", correct: false},
                { text:  "Giraffe", correct: false},
            ]
        },
        {
            question: "Which is the smallest country in the world?",
            answers: [
                { text:  "Vacatican city", correct: true},
                { text:  "Bhutan", correct: false},
                { text:  "Nepal", correct: false},
                { text:  "Sri Lanka", correct: false},
            ]
        },
        {
            question: "Which is the largest desert in the world?",
            answers: [
                { text:  "Kalahari", correct: false},
                { text:  "Gobi", correct: false},
                { text:  "Sahara", correct: false},
                { text:  "Antartica", correct: true},
            ]
        },
        {
            question: "Which is the smallest continent in the world?",
            answers: [
                { text:  "Asia", correct: false},
                { text:  "Australia", correct: true},
                { text:  "Arctic", correct: false},
                { text:  "Africa", correct: false},
            ]
        }
    ];

    const questionElement = document.getElementById("question");
    const answerButtons = document.getElementById("answer-buttons");
    const nextButton = document.getElementById("next-btn");
    const questionNumberElement = document.getElementById("question-number");
    let currentQuestionIndex = 0;

    function startQuiz() {
        currentQuestionIndex = 0;
        showQuestion();
    }

    function showQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        questionNumberElement.innerText = `Question ${currentQuestionIndex + 1}`;
        questionElement.innerText = currentQuestion.question;

        answerButtons.innerHTML = '';
        currentQuestion.answers.forEach(answer => {
            const button = document.createElement('button');
            button.innerText = answer.text;
            button.classList.add('btn');
            button.addEventListener('click', () => selectAnswer(answer.correct));
            answerButtons.appendChild(button);
        });

        nextButton.style.display = 'none';
    }

    function selectAnswer(correct) {
        answerButtons.querySelectorAll('.btn').forEach(btn => {
            if (btn.innerText === questions[currentQuestionIndex].answers.find(ans => ans.correct).text) {
                btn.style.backgroundColor = 'green';
            } else {
                btn.style.backgroundColor = 'red';
            }
            btn.disabled = true;
        });

        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            nextButton.style.display = 'block';
        } else {
            // No more questions, end of quiz
            console.log('End of quiz');
            nextButton.innerText = 'Restart';
            currentQuestionIndex = 0;
        }
    }

    function nextQuestion() {
        showQuestion();
    }

    startQuiz();

    nextButton.addEventListener('click', nextQuestion);
});
