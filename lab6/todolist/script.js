const form = document.querySelector("form");
const todoInput = document.querySelector("#todo-input");
const addButton = document.querySelector("#add-button");
const todoList = document.querySelector("#todo-list");

let todos = [];

function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText.length > 50) {
    alert("Task cannot exceed 50 characters.");
    return;
  }
  if (todoText.length > 0) {
    const todo = {
      id: Date.now(),
      text: todoText,
      completed: false,
    };

    todos.push(todo);
    todoInput.value = "";
    renderTodos();
  }
}

function deleteTodo(id) {
  const confirmDelete = confirm("Are you sure you want to delete this task?");
  if (confirmDelete) {
    todos = todos.filter((todo) => todo.id !== id);
    renderTodos();
  }
}

function toggleCompleted(id) {
  todos = todos.map((todo) => {
    if (todo.id === id) {
      todo.completed = !todo.completed;
    }
    return todo;
  });
  renderTodos();
}

function renderTodos() {
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    const todoItem = document.createElement("li");
    const todoText = document.createElement("span");
    const todoDeleteButton = document.createElement("button");
    const todoCheckbox = document.createElement("input");

    todoCheckbox.setAttribute("type", "checkbox");
    todoCheckbox.checked = todo.completed;
    todoCheckbox.addEventListener("change", () => toggleCompleted(todo.id));
    
    todoText.textContent = todo.text;
    if (todo.completed) {
      todoText.style.textDecoration = "line-through";
    } else {
      todoText.style.textDecoration = "none";
    }

    todoDeleteButton.textContent = "Delete";
    todoDeleteButton.addEventListener("click", () => deleteTodo(todo.id));

    todoItem.appendChild(todoCheckbox);
    todoItem.appendChild(todoText);
    todoItem.appendChild(todoDeleteButton);

    todoList.appendChild(todoItem);
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  addTodo();
});

renderTodos();