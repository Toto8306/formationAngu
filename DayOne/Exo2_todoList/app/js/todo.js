var todoApp = angular.module('todoApp', []);
todoApp.controller('TodoListController',function($scope){
	var todoList = $scope;
	console.log(JSON.parse(localStorage.getItem('todos')));
	// To fix
	//todoList.todos = JSON.parse(localStorage.getItem('todos'));
	
	if(!todoList.todos || todoList.todos.length < 1)
	{
		todoList.todos = [
		        {
		            text : 'Learn javascript',
		            done : false
		        },
		        {
		            text : 'Learn angular 1.4',
		            done : false
		        }
		    ];
	    localStorage.setItem('todos',JSON.stringify(todoList.todos));
    }

	todoList.addTodo = function() {
		if(todoList.formNewTodo.length > 0)
		{
	        todoList.todos.push({
	            text: todoList.formNewTodo,
	            done: false
	        });
	        todoList.formNewTodo = '';
	        localStorage.setItem('todos',JSON.stringify(todoList.todos));
        }
    }	    

    todoList.archive = function() {
	    var oldTodos = todoList.todos;
	    todoList.todos = [];
	    angular.forEach(oldTodos, function(todo) {
	      if (!todo.done) {
			todoList.todos.push(todo);
	      }
	  	});
	  	localStorage.setItem('todos',JSON.stringify(todoList.todos));
	  	
  	}

	todoList.remaining = function() {
		var count = 0;
        angular.forEach(todoList.todos, function(todo) {
        	count += todo.done ? 0 : 1;
        });
        return count;
    };  	

});

