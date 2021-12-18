let questions = [
    {
        "question": "Wo und wann tauchte das Coronavirus zum 1. Mal auf?",
        "answer_1": "Russland",
        "answer_2": "England",
        "answer_3": "China",
        "answer_4": "Deutschland",
        "right_answer": 3
    },
    {
        "question": "Wodurch wird Corona ausgelöst? ",
        "answer_1": "Katzen",
        "answer_2": "Autounfall",
        "answer_3": "Bakterien",
        "answer_4": "Durch bestimmte Viren.",
        "right_answer": 4
    },
    {
        "question": "Welche Funktion hat ein einfacher - wie zum Beispiel ein selbst genähter - Mund-Nasen-Schutz?",
        "answer_1": "Er schützt andere vor den Viren des Trägers",
        "answer_2": "Atemtraining",
        "answer_3": "Mode",
        "answer_4": "Keinen, alles Idioten",
        "right_answer": 1
    },
    {
        "question": "Wie kann man sich mit dem Coronavirus anstecken?",
        "answer_1": "Russland",
        "answer_2": "England",
        "answer_3": "Über den Kontakt mit Menschen, die sich vorher infiziert haben.",
        "answer_4": "Deutschland",
        "right_answer": 3
    },
    {
        "question": "Wie wird das Coronavirus übertragen?",
        "answer_1": "Russland",
        "answer_2": "Über eine Tröpfcheninfektion, zum Beispiel beim Husten und Niesen. ",
        "answer_3": "China",
        "answer_4": "Deutschland",
        "right_answer": 2
    },
    {
        "question": "Was kann jeder dafür tun, damit wir alle gut durch die Corona-Krise kommen?",
        "answer_1": "Eine Zeitlang auf Treffen mit Freunden verzichten, sich informieren, über Ängste sprechen und Kontakt über Telefon und Post halten",
        "answer_2": "England",
        "answer_3": "China",
        "answer_4": "Deutschland",
        "right_answer": 1
    },
    {
        "question": "Welche Maßnahmen sind wichtig, um Viren aufzuhalten?",
        "answer_1": "Abstand zu anderen halten und die Hände mit Seife waschen.",
        "answer_2": "England",
        "answer_3": "China",
        "answer_4": "Deutschland",
        "right_answer": 1
    },
]
let rightQuestions = 0;
let currentQuestion = 0;
let AUDIO_SUCCESS = new Audio('audio/success.mp3');
let AUDIO_FAIL = new Audio('audio/fail.mp3');

function init() {
    document.getElementById('questions-all').innerHTML = questions.length;
    showQuestion();
}

function showQuestion() {
    if (currentQuestion >= questions.length) {
        showEndscreen();
    } else {
        let percent = (currentQuestion + 1) / questions.length
        let question = questions[currentQuestion];
        let factor = (percent * 100).toFixed(1);
        document.getElementById('card-question').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
        document.getElementById('current-question-number').innerHTML = `${currentQuestion + 1} `
        console.log(percent)
        document.getElementById('card-img-top').innerHTML = `  <div id="card-img-top"> <img src="images/covid.jpg" class="card-img-top">
        </div> <div class="progress-bar" role="progressbar" style="width: ${factor}%;" aria-valuenow="${factor}"aria-valuemin="0" aria-valuemax="100">${factor} %</div> `
        document.getElementById('card-title').innerHTML = ` Frage ${currentQuestion + 1} `
    }


}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);

    let id_right_answer = `answer_${question['right_answer']}`
    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).classList.add('bg-success');
        rightQuestions++;
        AUDIO_SUCCESS.currentTime = 0;
        AUDIO_SUCCESS.play();
    } else {
        document.getElementById(selection).classList.add('bg-danger');
        document.getElementById(id_right_answer).classList.add('bg-success');
        AUDIO_FAIL.currentTime = 0;
        AUDIO_FAIL.play();
    }
    document.getElementById('next-btn').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    showQuestion();
    resetAnswerButtons();

}

function resetAnswerButtons() {
    document.getElementById('next-btn').disabled = true;
    document.getElementById('answer_1').classList.remove('bg-danger');
    document.getElementById('answer_2').classList.remove('bg-danger');
    document.getElementById('answer_3').classList.remove('bg-danger');
    document.getElementById('answer_4').classList.remove('bg-danger');
    document.getElementById('answer_1').classList.remove('bg-success');
    document.getElementById('answer_2').classList.remove('bg-success');
    document.getElementById('answer_3').classList.remove('bg-success');
    document.getElementById('answer_4').classList.remove('bg-success');

}

function showEndscreen() {
    document.getElementById('card-title').innerHTML = "Glückwunsch!";
    document.getElementById('card-question').innerHTML = `Du hast <b>${rightQuestions}</b> Fragen von <b>${questions.length}</b> richtig beantwortet`;
    document.getElementById('card-img-top2').classList.remove('d-none');
    document.getElementById('answer_1').classList.add('d-none');
    document.getElementById('answer_2').classList.add('d-none');
    document.getElementById('answer_3').classList.add('d-none');
    document.getElementById('answer_4').classList.add('d-none');

    document.getElementById('card-img-top').classList.add('d-none');
    document.getElementById('header').innerHTML = `<h1> Geschafft! </h1>`;
    document.getElementById('tropy').classList.remove('d-none');
    document.getElementById('tropy2').classList.remove('d-none');

}

function restartQuiz() {
    document.getElementById('card-img-top').classList.remove('d-none');
    document.getElementById('card-img-top2').classList.add('d-none');
    rightQuestions = 0;
    currentQuestion = 0;
    document.getElementById('header').innerHTML = `<h1> Corona Quiz </h1>`;
    document.getElementById('tropy').classList.add('d-none');
    document.getElementById('tropy2').classList.add('d-none');
    document.getElementById('answer_1').classList.remove('d-none');
    document.getElementById('answer_2').classList.remove('d-none');
    document.getElementById('answer_3').classList.remove('d-none');
    document.getElementById('answer_4').classList.remove('d-none');

    init();
}