import { Component, OnInit } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../services/todo.service';
import { TODO } from '../model/todo';


@Component({
    moduleId: module.id,
    selector: 'todo',
    templateUrl: `todo.component.html`,
    styleUrls: ['todo.component.css'],
    providers: [TODO]
})
export class TODOComponent implements OnInit {
    id: string = null;
    task: string = null;
    category: string = null;
    isComplete:boolean = null;
    isSelected:boolean = false;
    categories:any[];
    todo: TODO[];
    ttodo: any[];

    constructor(private _todo: TodoService) { }

    ngOnInit() {
        this.categories = this._todo.getCategories();
        this.todo = this._todo.getTodos();
        // this._todo.getTodos().subscribe(todo => {
        //     this.todo = todo;
        // });
    }

    save(){
        this._todo.saveTodo(this.task, this.category); //.subscribe(res => {
        //     this.todo = res;
    }

    update(todo: TODO) {
        // console.log('Editing' + todo.id);
        this.task = todo.task;
        this.category = todo.category;
        this.isComplete = todo.statuses.description=="Completed";
        console.log(todo);
        console.log(todo.category);
        this._todo.updateTodo(todo); 
    }

    delete(id:number) {
        // console.log('Deleting ' + id);
        this._todo.deleteTodo(id); 
    }

    toggle(todo:TODO){
        this.todo.isComplete = this.todo.isComplete==true?true:false;
        console.log(todo);
    }
}
