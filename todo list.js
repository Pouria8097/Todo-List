const input = document.getElementById("todoInput"); 
const addbtn = document.getElementById("addBtn"); 
const todolist = document.getElementById("todoList");

addbtn.addEventListener("click", () => {

    const todoText = input.value.trim();

    if (todoText === "") { return; }

    const li = document.createElement("li");

    li.textContent = todoText;

    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "-"; deleteBtn.addEventListener("click", () => { li.remove(); });

    li.appendChild(deleteBtn);

    todolist.appendChild(li);

    input.value = "";
});

input.addEventListener("keydown", (event) => {
 if (event.key === "Enter") { addbtn.click(); }
});