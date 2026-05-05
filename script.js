function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  if (!task) return;

  const li = document.createElement("li");

  const taskText = document.createElement("span");
  taskText.innerText = task;
  li.appendChild(taskText);

  const completeButton = document.createElement("button");
  completeButton.type = "button";
  completeButton.innerText = "Complete";
  completeButton.onclick = () => toggleTaskComplete(taskText, completeButton);
  li.appendChild(document.createTextNode(" "));
  li.appendChild(completeButton);

  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.innerText = "Remove";
  removeButton.onclick = () => removeTask(li);
  li.appendChild(document.createTextNode(" "));
  li.appendChild(removeButton);

  document.getElementById("taskList").appendChild(li);
  input.value = "";
  updateTaskCount();
}

function updateTaskCount() {
  const count = document.querySelectorAll("#taskList li").length;
  const label = count === 1 ? "task" : "tasks";
  document.getElementById("taskCount").innerText = `${count} ${label}`;
}

function toggleTaskComplete(taskText, button) {
  const completed = taskText.classList.toggle("completed");
  button.innerText = completed ? "Undo" : "Complete";
}

function removeTask(li) {
  li.remove();
  updateTaskCount();
}

updateTaskCount();