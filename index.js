let tasks = [];

count = Taskinput = document.getElementById("inputb");
count = AddTask = document.getElementById("addtask");
count = TaskList = document.getElementById("TaskList")

AddTask.addEventListener('click', function() {
    const task = taskinput.value.trim();
    if (task !== "") {
        tasks.push(task);
        renderTasks();
        taskinput.value = "";
    }
})

function renderTasks() {
    TaskList.innerHTML = "";
    
}