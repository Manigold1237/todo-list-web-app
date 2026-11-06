
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const clearBtn = document.getElementById("clearBtn");

function addTask() {
    const taskValue = taskInput.value.trim();

    if (taskValue === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");

    const taskText = document.createElement("span");
    taskText.textContent = taskValue;
    taskText.className = "task-text";

    // Complete button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.className = "complete-btn";

    completeBtn.addEventListener("click", function() {
        taskText.classList.toggle("completed");

        if (taskText.classList.contains("completed")) {
            completeBtn.textContent = "Completed ✓";
            completeBtn.style.background = "green";
        } else {
            completeBtn.textContent = "Complete";
            completeBtn.style.background = "#667eea";
        }

        updateCount();
    });

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    deleteBtn.addEventListener("click", function() {
        li.remove();
        updateCount();
    });

    li.appendChild(taskText);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = "";
    updateCount();
}

function updateCount() {
    const tasks = taskList.querySelectorAll("li");
    const completed = taskList.querySelectorAll(".completed");

    taskCount.textContent =
        (tasks.length - completed.length) + " tasks remaining";
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

clearBtn.addEventListener("click", function() {
    taskList.innerHTML = "";
    updateCount();
});
