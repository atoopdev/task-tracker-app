const submitBTN = document.getElementById("submit-btn");
const tasksList = document.getElementById("my-tasks-ul");


// ------------------addTask----------------------------
submitBTN.addEventListener("click", addTask)

function addTask() {
    console.log("Submit button clicked.")
    const task = document.getElementById("task").value;

    // might want to data validate
    const due = document.getElementById("due").value;

    console.log(task, due);
    tasksList.innerHTML +=
        `<li> 
    <div>
        <p><strong>Task: ${task}</strong></p>
        <p><strong>Due date: </strong>${due}</strong></p>
        <label for="done">Done:</label>
        <input type="checkbox" name="done">
    </div>
    </li>`;

    // task.value = "";
    // due.value = "";
}