
function TodoItem(title) {
    this.title = title;
    this.completed = false;
}

TodoItem.prototype.toggleCompletion = function() {
    this.completed = !this.completed;
};

function TodoList() {
    this.items = [];
}

TodoList.prototype.addItem = function(title) {
    const newItem = new TodoItem(title);
    this.items.push(newItem);
    this.render();
};

TodoList.prototype.render = function() {
    const todoListContainer = document.getElementById('todo-list');
    todoListContainer.innerHTML = '';

    this.items.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.textContent = item.title;
        listItem.className = item.completed ? 'completed' : '';

        const toggleButton = document.createElement('button');
        toggleButton.textContent = item.completed ? 'Undo' : 'Complete';
        toggleButton.addEventListener('click', () => {
            item.toggleCompletion();
            this.render();
        });

        listItem.appendChild(toggleButton);


        todoListContainer.appendChild(listItem);
    });
};


const todoList = new TodoList();
function handleAddTodo() {
    const newTodoTitle = document.getElementById('new-todo-title').value;
    if (newTodoTitle) {
        todoList.addItem(newTodoTitle);
        document.getElementById('new-todo-title').value = '';
    }
}

document.getElementById('add-todo-button').addEventListener('click', handleAddTodo);

todoList.render();
