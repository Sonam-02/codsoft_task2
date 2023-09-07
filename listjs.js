let input = document.getElementById("input");
let listcontainer = document.getElementById("list-container");
function addTask() {
    if (input.value === '') {
        alert("you must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "&#9249";
        li.appendChild(span);
    }
    input.value = "";
    saveContent();
}
listcontainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveContent();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveContent();
    }
}, false);

function saveContent() {
    localStorage.setItem("data", listcontainer.innerHTML);
}
function showTask() {
    listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();
