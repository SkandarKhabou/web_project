

const quizData = [
    {
        question: "The concept of gravity was discovered by which famous physicist?",
        a: "Isaac Newton",
        b: "Gumball waterson",
        c: "christopher columbus ",
        d: "Badr weld moufida",
        correct: "a",
    },
    {
        question: "How many months have 28 days in them?",
        a: "February",
        b: "Mars",
        c: "All of them u idiot ... ",
        d: "January",
        correct: "c",
    },
    {
        question: "What is it that lives if it is fed, and dies if you give it a drink?",
        a: "Water",
        b: "Air",
        c: "Fire",
        d: "Earth",
        correct: "c",
    },
    {
        question: "What goes up but never ever comes down?",
        a: "Your money",
        b: "Your skills",
        c: "Your age",
        d: "Your hand",
        correct: "c",
    },
    {
        question: " If it takes 8 men 8hours to build a wall, how long would it take four men?",
        a: "8 hours",
        b: "4 hours",
        c: "16 hours",
        d: "No time, because the wall is already built",
        correct: "d",
    },
    {
        question: "If you have a bowl with six apples and you take away four, how many do you have?",
        a: "2 Apples",
        b: "4 Apples",
        c: "6 Apples",
        d: "None",
        correct: "b",
    },
    {
        question: "What will you actually find at the end of every rainbow?",
        a: "Red",
        b: "Green",
        c: "Purple",
        d: "The letter ‘W’",
        correct: "d",
    },
    {
        question: "What does come down but never goes up?",
        a: "Your age",
        b: "My love for you ;)",
        c: "Rain",
        d: "Not my grades",
        correct: "c",
    },
    {
        question: "Will you be my date?",
        a: "yes",
        b: "yes",
        c: "yes",
        d: "yes",
        correct: "a",
    },
    {
        question: "True or False !",
        a: "True",
        b: "False",
        c: "No please, i have children ...",
        d: "Why not",
        correct: "a",
    },
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
const submitBtnMail = document.getElementById('submitmail')
const answersTable = document.getElementById('answerTable')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer == quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly</h2><button onclick="location.reload()">Reload</button>`;
           quizData.forEach(element => {
            correctanswer=element.correct=="a"? element.a :element.correct=="b"? element.b :element.correct=="c"? element.c: element.d;
            answersTable.insertAdjacentHTML("beforeend",'<th class=\"tableContent\">'+element.question+'</th><th class=\"tableContent\">'+correctanswer+'</th>');
        });
            answersTable.insertAdjacentHTML("afterbegin", "<th class=\"tableHeader\">Question</th><th class=\"tableHeader\">Correct Answer</th>");
        }
    }
});

////////////////


