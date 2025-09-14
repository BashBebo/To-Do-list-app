// State: array to store tasks
let tasks = [];

// Grab elements
const taskInput = document.getElementById("inputb");
const addTaskBtn = document.getElementById("addtask");
const taskList = document.getElementById("Tasklist");

// Function to render tasks
function renderTasks() {
    taskList.innerHTML = ""; // clear existing tasks

    tasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = task;  // display the task
        taskList.appendChild(li); // add to the task list
    });
}

// Event listener to add tasks
addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if(taskText !== "") {
        tasks.push(taskText);  // add task to array
        renderTasks();         // update the UI
        taskInput.value = "";  // clear input
    }
});
