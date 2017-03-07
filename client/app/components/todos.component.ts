import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { TODO } from '../model/todo';


@Component({
    moduleId: module.id,
    selector: 'todo',
    templateUrl: 'todos.component.html',
    providers: [TODO]
})
export class TODOComponent implements OnInit {
    todo: TODO[];
    ttodo: any[];

    constructor(private _todo: TodoService) { }

    ngOnInit() {
        // for mock data
         this.ttodo = this._todo.getTodos();
        // this._todo.getTodos().subscribe(todo => {
        //     this.todo = todo;
        // });

    }


    edit() {

    }



}