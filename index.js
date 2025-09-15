let tasks = [];

const taskInput = document.getElementById('taskinput');
const taskAdd = document.getElementById('taskadd');
const taskList = document.getElementById('tasklist');


taskAdd.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        tasks.push(taskText);
    rendertasks();
    taskInput.value="";
    }
})

function rendertasks () {
    taskList.innerHTML="";
    tasks.forEach((task , index) => {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('click', () => {
            tasks.splice(index, 1);
            rendertasks();
        });
        taskList.appendChild(li);
        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(task));
    });

}

