const todoInput = document.getElementById("todo-input");
const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");

todoForm.addEventListener("submit", (e) => {
  const formData = new FormData(e.currentTarget);
  e.preventDefault();
  const todoText = formData.get("todo-input");

  const todoItem = document.createElement("li");
  todoItem.innerText = todoText;

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "❌";
  deleteButton.className = "delete";
  deleteButton.addEventListener("click", () => {
    todoItem.remove();
  });
  todoItem.appendChild(deleteButton);

  todoList.appendChild(todoItem);

  todoInput.value = "";
});
