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
        "answer_1": "Russland",
        "answer_2": "England",
        "answer_3": "China",
        "answer_4": "Durch bestimmte Viren.",
        "right_answer": 4
    },
    {
        "question": "Welche Funktion hat ein einfacher - wie zum Beispiel ein selbst genähter - Mund-Nasen-Schutz?",
        "answer_1": "Er schützt andere vor den Viren des Trägers",
        "answer_2": "England",
        "answer_3": "China",
        "answer_4": "Deutschland",
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
let currentQuestion = 0;

function init() {
    document.getElementById('questions-all').innerHTML = questions.length;
    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('card-question').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);

    console.log('Selected anweser is', selectedQuestionNumber)
    console.log('Current question is', question)
    if (selectedQuestionNumber == question['right_answer']) {
        console.log('richtig')
    } else { console.log('falsch') }
} 
