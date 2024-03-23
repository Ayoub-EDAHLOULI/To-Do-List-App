
const input = document.querySelector("#input-box");
const addBtn = document.querySelector(".add-btn");
const toDoTasks = document.querySelector(".to-do-tasks");

addBtn.addEventListener("click", function(e){
    e.preventDefault()
    let li = document.createElement('li');

    li.innerText = input.value; 
    if(input.value == ""){
        alert("You Have To Write Something :")
    }else{
        toDoTasks.append(li);
    }

    input.value = "";

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    saveData();
})

toDoTasks.addEventListener("click", (e) => {

    let target = e.target;
    
    if(target.tagName === "LI") {
        //toDoTasks.classList.add('checked');
        //console.log(target.innerHTML)
        target.classList.toggle('checked');
        target.classList.toggle('animate');
        saveData();
    }

    if(target.tagName === "SPAN"){
        target.parentElement.remove();
        saveData();
    }
})

function saveData(){
    localStorage.setItem("data",toDoTasks.innerHTML);
}

function showData(){
    toDoTasks.innerHTML = localStorage.getItem("data");
}

showData();