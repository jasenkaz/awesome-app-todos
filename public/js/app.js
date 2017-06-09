
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
    //this.addButton = this.root.querySelector('.add-button');
    this.createForm = this.root.querySelector('.create-form');
    this.taskInput = this.root.querySelector('.task-input');
    this.todoList = this.root.querySelector('.todo-list');
  },

  bindEvents: function(){
    //this.addButton.addEventListener('click', () => this.addTodo());
    this.createForm.addEventListener('submit', (event) => this.addTodo(event));
  },
addTodo: function(event){
  event.preventDefault();
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
cacheDeleteButtons: function(){
  this.deleteButtons = this.root.querySelectorAll('.delete');

},
bindDeleteEvents: function(){
  this.deleteButtons.forEach((button, index) => {
    button.addEventListener('click', () => this.deleteTodo(index));
  });
},
deleteTodo: function(index){
  this.todos.splice(index, 1);
  this.render();
},
  render: function(){
    const lis = this.todos
                .map(todo => `<li>${todo.task}<button class='delete'>X</button></li>`)
                .join('');  //put empty string '' to avoid printing comma in browser
    this.todoList.innerHTML = lis; //inner html can lead to security problems
    this.cacheDeleteButtons();
    this.bindDeleteEvents();
  }
};

TodoApp.start();
