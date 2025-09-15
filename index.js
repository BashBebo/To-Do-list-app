let tasks = [];

const taskInput = document.getElementById('taskinput');
const taskAdd = document.getElementById('taskadd');
const taskList = document.getElementById('tasklist');


taskAdd.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "")
        tasks.push(taskText);
    rendertasks();
    taskInput.value="";
})

function rendertasks () {
    taskList.innerHTML="";
    tasks.forEach(task => {
        const li = Document.createElement('li');
        li.textContent = taskText;
        taskList.appenChild(li);
    });

}