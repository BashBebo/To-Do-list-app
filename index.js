let tasks = [];

const taskInput = document.getElementById("inputb");
const addTask = document.getElementById("addtask");
const taskList = document.getElementById("TaskList"); // ID must match HTML

addTask.addEventListener('click', function() {
    const task = taskInput.value.trim();
    if (task !== "") {
        tasks.push(task);
        renderTasks();
        taskInput.value = "";
    }
})

function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = task;
        taskList.appendChild(li);
    });
}
