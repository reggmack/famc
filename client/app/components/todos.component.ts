import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { TODO } from '../model/todo';

@Component({
    moduleId: module.id,
    selector: 'todos',
    templateUrl: 'todos.component.html',
    providers: [TODO]
})
export class TODOComponent implements OnInit {
    todo: TODO[];
    ttodo: any[];

    constructor(private _todoService: TodoService) { }

    ngOnInit() {
        // for mock data
         this.ttodo = this._todoService.getTodos();
        // this._todo.getTodos().subscribe(todo => {
        //     this.todo = todo;
        // });

    }


    edit() {

    }

      addTodo(event, todoText){
      var result;
      var newTodo = {
        text: todoText.value,
        isCompleted: false
      };
      
      result = this._todoService.saveTodo(newTodo);
      
        this.ttodo.push(newTodo);
        todoText.value = '';
     
  }
  
  setEditState(todo, state){
    if(state){
      todo.isEditMode = state;
    } else {
      delete todo.isEditMode;
    }
  }
  
  updateStatus(todo){
    var _todo = {
      _id:todo._id,
      text: todo.text,
      isCompleted: !todo.isCompleted
    };
    
    this._todoService.updateTodo(todo)
      .subscribe(data => {
        todo.isCompleted = !todo.isCompleted;
      });
  }
  
  updateTodoText(event, todo){
    if(event.which === 13){
        todo.text = event.target.value;
        var _todo = {
          _id: todo._id,
          text: todo.text,
          isCompleted: todo.isCompleted
        };
        
        this._todoService.updateTodo(todo)
          .subscribe(data => {
            this.setEditState(todo, false);
          })
    }
  }
  
  deleteTodo(todo){
    var todos = this.todo;
    
    this._todoService.deleteTodo(todo._id)
      .subscribe(data => {
        if(data.n == 1){
          for(var i = 0; i < todos.length; i++){
            if(todos[i].id == todo._id){
              todos.splice(i, 1);
            }
          }
        }
      })
  }



}