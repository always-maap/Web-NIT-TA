const todoInput = document.getElementById("todo-input");
const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");

const cachedTodos = window.localStorage.getItem("cachedTodos");
let todos = cachedTodos ? JSON.parse(cachedTodos) : [];

function saveTodos() {
  window.localStorage.setItem("cachedTodos", JSON.stringify(todos));
}

function addTodo(newTodo) {
  todos.push(newTodo);
  renderTodo(newTodo);
  saveTodos();
}

function removeTodo(todoEl, todo) {
  todoEl.remove();
  todos = todos.filter((t) => t != todo);
  saveTodos();
}

todoForm.addEventListener("submit", (e) => {
  const formData = new FormData(e.currentTarget);
  e.preventDefault();
  const todoText = formData.get("todo-input");

  addTodo(todoText);

  todoInput.value = "";
});

function renderTodo(todo) {
  const todoItem = document.createElement("li");
  todoItem.innerText = todo;

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "❌";
  deleteButton.className = "delete";
  deleteButton.addEventListener("click", () => removeTodo(todoItem, todo));
  todoItem.appendChild(deleteButton);

  todoList.appendChild(todoItem);
}

(() => todos.forEach(renderTodo))();
