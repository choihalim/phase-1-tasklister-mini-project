document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const submitBtn = document.getElementById("create-button");

  form.addEventListener("submit", function (event) {
    event.preventDefault()
  });

  submitBtn.addEventListener("click", () => {
    let textInput = document.getElementById("new-task-description").value;

    if (textInput != "") {
      addList(textInput);
    }
    else {
      alert("Please enter a value.")
    }
    textInput = "";
  })


  function addList(text) {
    let taskList = document.getElementById("tasks");
    let newItem = document.createElement("li");
    newItem.textContent = text;
    taskList.appendChild(newItem);
    // createDeleteBtn()
  }

  // function createDeleteBtn() {
  //   let deleteBtn = document.createElement("button");
  //   let taskList = document.getElementById("tasks");
  //   deleteBtn.setAttribute = ("id", "delete-btn");
  //   deleteBtn.innerText = "Delete Task";
  //   taskList.appendChild(deleteBtn);

  //   deleteBtn.addEventListener("click", () => {
  //     let taskList = document.getElementById("tasks");
  //     taskList.remove(taskList);
      
  //   })
  // }
});
