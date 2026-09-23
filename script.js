let tasks = [];

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const task = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    tasks.push(task);

    taskInput.value = "";

    displayTasks();
}

function displayTasks() {
    const taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    tasks.forEach(function(task) {

        const taskDiv = document.createElement("div");

        taskDiv.className = "task";

        if (task.completed) {
            taskDiv.classList.add("completed");
        }

        taskDiv.innerHTML = `
            <span>${task.text}</span>

            <div class="task-buttons">

                <button
                    class="complete-btn"
                    onclick="completeTask(${task.id})">
                    ${task.completed ? "Undo" : "Complete"}
                </button>

                <button
                    class="delete-btn"
                    onclick="deleteTask(${task.id})">
                    Delete
                </button>

            </div>
        `;

        taskList.appendChild(taskDiv);
    });

    updateTaskCount();
}

function completeTask(id) {

    tasks.forEach(function(task) {

        if (task.id === id) {
            task.completed = !task.completed;
        }

    });

    displayTasks();
}

function deleteTask(id) {

    tasks = tasks.filter(function(task) {
        return task.id !== id;
    });

    displayTasks();
}

function updateTaskCount() {

    // Total number of tasks
    document.getElementById("totalTasks").textContent = tasks.length;

    // Number of completed tasks
    let completedCount = 0;

    tasks.forEach(function(task) {
        if (task.completed) {
            completedCount++;
        }
    });

    document.getElementById("completedTasks").textContent = completedCount;
}
