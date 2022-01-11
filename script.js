let submitBTN = document.getElementById("submit-btn");


// ------------------addTask----------------------------
submitBTN.addEventListener("click", addTask)

function addTask() {
    console.log("Submit button clicked.")
    const task = document.getElementById("task").value;
    const due = document.getElementById("due").value;

    console.log(task, due);
}