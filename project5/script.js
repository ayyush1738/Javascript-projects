const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelector(".input-box");

function showNotes() {
    if (localStorage.getItem("notes")) {
        notesContainer.innerHTML = localStorage.getItem("notes");
    }
}


function updateStorage()
{
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "./images/delete-193.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener("click", (e)=>{
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName == "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function()
            {
                updateStorage();
            }
        })
    }
})

document.addEventListener("DOMContentLoaded", () => {
    showNotes();
});

