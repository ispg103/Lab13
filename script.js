const taskInput = document.getElementById ('taskInput');
const publishButton = document.getElementById ('publishButton');
const toDo = document.getElementById ('todo');
const btnBlue = document.getElementById ('btnBlue');
const cross = document.getElementById ('cross');
const localStorage = window.localStorage;
//getItem, setItem
//Los datos de la pagina

let tasks = [];

//Cargar los datos que estaban antes
let loadedTasks = localStorage.getItem("tasks");

if (loadedTasks === null){
    tasks = [];
}
else{
    tasks = JSON.parse(loadedTasks);
}

console.log(tasks);

function showTasks(){
    let html = "";
    for(let i=0; i<tasks.length; i++){
        html += `<button id="cross">x</button>
        <h3>${tasks[i].task}. Estado: ${tasks[i].state}</h3>
        <button id="btnBlue"></button>
        <button id="btnRed"></button>`;
    }
    todo.innerHTML = html;
}


showTasks();


function post(){
    let text = taskInput.value;
    let state = 0;
    let task = new Task(text, state);
    tasks.push(task);
    console.log(tasks);
    let json = JSON.stringify(tasks);
    localStorage.setItem("tasks", json);

}


publishButton.addEventListener ('click', post);
