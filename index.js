// This is to create an araay called tasks creating an array using []
let tasks = [];

// These are the items and ids to store so we can use them later and they do not get changed.
const taskInput = document.getElementById('taskinput');
const taskAdd = document.getElementById('taskadd');
const taskList = document.getElementById('tasklist');

// Here we are using taskAdd so when it gets lclicked we create a new functionc alled taskText
// This is so we we can get the inputs values for the text whatever we wrote there and trim it so no extra messy spaces
// if the text is not empty push it into the array
// Then we render all of the taska and make sure the value gets changed back to nothing so we can make a new one
taskAdd.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        tasks.push(taskText);
    rendertasks();
    taskInput.value="";
    }
})

// This is the main function to show everything on the users screen
// we get the taskList and we basically make sure the html on it is nothing so we can write on it and it looks clean
// for each one of the tasks we go to the index and task and we create a new list / task and we make sure there is a check box next to it
// we need to make sure our checkbox which was the nsame actually has the properties of a checkbox
// when we click it it gets spliced whatever task gets clicked
// Then we rerender it
// for the List we use append child to stick it on the board (metaphor)
// And put the checkbox
// Still working on it to figure it out
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

