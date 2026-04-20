const form = document.querySelector("form");
const taskInput = document.querySelector("#task-input");
const urgentInput = document.querySelector("#important");
const taskList = document.querySelector("ul");
const deleteButtons = document.querySelectorAll(".delete");
//let tasks = [];
let identifier = 0;
function deleteTask(event) {
  const toDel = event.target.parentElement.parentElement.parentElement;
  toDel.remove();
}
function editTask(event) {
  console.log("edit task", event.target);
}
function renderTask(singleTask) {
  const li = document.createElement("li");
  li.innerHTML = `  
          <span>${singleTask.task}</span>

           <div class="actions">
            <button class="edit">
              <img src="./img/edit.svg" onclick="editTask(event)" alt="edit" />
            </button>

            <button class="delete">
              <img src="./img/trash.svg" onclick="deleteTask(event)" alt="delete" />
            </button>
          </div>
       `;
  if (singleTask.isUrgent) {
    li.classList.add("urgent");
  }
  li.setAttribute("id", singleTask.identifier);

  taskList.appendChild(li);
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const task = taskInput.value;
  const isUrgent = urgentInput.checked;
  //tasks.push({ task, isUrgent });
  identifier++;
  renderTask({ task, isUrgent, identifier });

  taskInput.value = "";
  urgentInput.checked = false;
});
