
const TodoApp = {
  rootElement: '#app',
  todos: [],
  start: function(){
    this.cacheDOM();
    this.bindEvents();
    this.render();
  },

  cacheDOM: function(){
    this.root = document.querySelector(this.rootElement);
    this.addButton = this.root.querySelector('.add-button');
    this.taskInput = this.root.querySelector('.task-input');
    this.todoList = this.root.querySelector('.todo-list');
  },

  bindEvents: function(){
    this.addButton.addEventListener('click', () => this.addTodo());
  },
addTodo: function(){
  //grab the task input value, validate that task value is actually something, then build to do object with that value, then add that todo to the todos array, render, clear input
  const taskValue = this.taskInput.value;
  if(!taskValue){
      return;  //if nothing in the box, return makes it stop
  }
  const todo = {
    task: taskValue,
    isComplete: false
  };

  this.todos.push(todo);
  this.render();
  this.taskInput.value = '';
},
  render: function(){
    const lis = this.todos
                .map(todo => `<li>${todo.task}</li>`)
                .join('');  //put empty string '' to avoid printing comma in browser
    this.todoList.innerHTML = lis; //inner html can lead to security problems
  }
};

TodoApp.start();
