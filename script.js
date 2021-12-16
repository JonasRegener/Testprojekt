let notes = ["Eins","Zwei"];
let notes_details = ["Eins","Zwei"];
let doneNotes = ["3","4"];
let doneNotes_details = ["3","4"];

function init() {
    render();
    loadDoneNotes();
    loadNotes();
}


function render() {
    document.getElementById("notes-container").innerHTML = "";
    document.getElementById("notes-container").innerHTML += `
    <div class="header" id="header">
    <div class="shownotes" onclick="showNotes()"> <h1>Notes</h1> </div>
    </div>
    <div class="mainbuttons-container">
    <div class="addnotes" onclick="newNotes()" id="newNotes"></div>
    <div class="showdonenotes" onclick="showDone()" id="showDone"></div> </div> 
    </div>`
}

function showNotes() {
    document.getElementById("notes-container").innerHTML = `<div class="headerh1"> <h1>Meine Notizen</h1></div> `;
    for (let i = 0; i < notes.length; i++) {
        document.getElementById("notes-container").innerHTML += ` 
        <div class="notesbox">
        <h1>${notes[i]}</h1>
        <p>${notes_details[i]}</p>
        <div class="buttons-container-note">
        <div class="checkitbutton" onclick="noteisdone(${i})"></div>
        <div class="deleteButton" onclick="deleteNote(${i})"></div>      
        </div> 
        </div>
        `

    }
    document.getElementById("notes-container").innerHTML += ` 
    <div class="back_to_menu_big_absoltute">
    <div id="back_to_menu" class="back_to_menu_big" onclick="render()"></div>
    </div>
    `
}

function newNotes() {
    document.getElementById("notes-container").innerHTML = "";
    document.getElementById("notes-container").innerHTML += ` 
    <div class="notesbox">
    <div> <input  id="inputNewNote" class="hide" placeholder="Your next node"></div>
    <div> <textarea id="textareaNewNote" class="hide" placeholder="Describe your node here..."></textarea></div>
    <div class="buttons-container-note"> <div id="addNewNote" onclick="addNewNote()" class="smalladdbutton"></div>
    
    
    <div id="back_to_menu" class="back_to_menu" onclick="render()"></div>
    </div>
    `
    document.getElementById("inputNewNote").focus();
    document.getElementById("inputNewNote").select();
}

function addNewNote() {
    let note = document.getElementById('inputNewNote').value;
    let detail = document.getElementById('textareaNewNote').value;
    if (note.length > 0 && detail.length > 0 ) {
        notes.push(note);
        notes_details.push(detail);
        save();
        showNotes();
        alert('Deine Todo wurde erfolgreich erstellt!');
    } else {
        alert('Die Felder müssen ausgefüllt werden.')
    }
}

function showDone() {
    document.getElementById("notes-container").innerHTML = "";
    document.getElementById("notes-container").innerHTML += `<div class ="headerh1"> <h1>Meine erledigten Notizen</h1></div>`;
    for (let i = 0; i < doneNotes.length; i++) {
        document.getElementById("notes-container").innerHTML += ` 
        <div class="notesbox">
    <h1>${doneNotes[i]}</h1>
    <p>${doneNotes_details[i]}</p>
    <div class="buttons-container-note">
    <div class="smalladdbutton" onclick="reloadNote(${i})"></div>
        <div class="deleteButton" onclick="deletedoneNote(${i})"></div>      
        </div> 
        </div>
        </div>
        `
    }
    document.getElementById("notes-container").innerHTML += ` 
<div class="back_to_menu_big_absoltute">
<div title="back" id="back_to_menu" class="back_to_menu_big" onclick="render()"></div>
</div>
`

}

function reloadNote(i) {
    let reloadedNote = doneNotes[i];
    let reloadedNote_detail = doneNotes_details[i];
    notes.push(reloadedNote);
    notes_details.push(reloadedNote_detail);
    doneNotes.splice(i, 1);
    doneNotes_details.splice(i, 1);
    save()
    showDone();
    alert('Deine Todo wurde erfolgreich wieder hergestellt!')
}


function deleteNote(i) {
    notes.splice(i, 1);
    notes_details.splice(i, 1);
    save();
    showNotes();
    alert('Deine Todo wurde erfolgreich gelöscht!');
}

function deletedoneNote(i) {
    doneNotes.splice(i, 1);
    doneNotes_details.splice(i, 1);
    save();
    showDone();
    alert('Deine bereits erledigte Todo wurde erfolgreich gelöscht!');
}

function noteisdone(i) {
    let newDoneNote = notes[i];
    let newDoneNote_detail = notes_details[i];
    doneNotes.push(newDoneNote);
    doneNotes_details.push(newDoneNote_detail);
    notes.splice(i, 1);
    notes_details.splice(i, 1);
    save()
    showNotes();
    alert('Aufgabe erfolgreich erledigt. Super!')
}


function save() {
    let notesAsText = JSON.stringify(notes);
    let notes_detailsAsText = JSON.stringify(notes_details);
    let doneNotesAsText = JSON.stringify(doneNotes);
    let doneNotes_detailsAsText = JSON.stringify(doneNotes_details);
        localStorage.setItem('notes', notesAsText);
        localStorage.setItem('notes_details', notes_detailsAsText);
        localStorage.setItem('doneNotes', doneNotesAsText);
        localStorage.setItem('doneNotes_details', doneNotes_detailsAsText);
}

function loadNotes() {
    let notesAsText = localStorage.getItem('notes');
    let notes_detailsAsText = localStorage.getItem('notes_details');
    if (notesAsText && notes_detailsAsText) {
        notes = JSON.parse(notesAsText);
        notes_details = JSON.parse(notes_detailsAsText);
    } 
}
function loadDoneNotes() {
    let doneNotesAsText = localStorage.getItem('doneNotes');
    let doneNotes_detailsAsText = localStorage.getItem('doneNotes_details');
    if (doneNotesAsText && doneNotes_detailsAsText) {
        doneNotes = JSON.parse(doneNotesAsText);
        doneNotes_details = JSON.parse(doneNotes_detailsAsText);
    }
}