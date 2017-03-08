import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { TODO } from '../model/todo';

@Injectable()
export class TodoService {
    private url = 'https://api.example.com';

    private todo = [
        {
            id: '1',
            task: "Master Angular 2",
            category: 'Education',
            isComplete: true,
            statuses: {
                description: "Completed",
                date: "2017-02-02T20:24:03+00:00"
            }
        },
        {
            id: '2',
            task: "Get Milk",
            category: 'Grocery List',
            statuses: {
                description: "Created",
                date: "2017-03-06T18:24:03+00:00"
            }
        }, {
            id: '3',
            task: "Get Eggs",
            category: 'Grocery List',
            statuses: {
                description: "Created",
                date: "2017-03-06T18:24:03+00:00"
            }
        },
        {
            id: '4',
            task: "Buy Plane Tickets",
            category: 'General',
            statuses: {
                description: "Created",
                date: "2017-03-07T18:24:03+00:00"
            }
        }
    ];

    private categories = [
        {id:1, text:'General'},
        {id:2, text:'Grocery List'},
        {id:3, text:'Education'},
        {id:4, text:'Business'},
        {id:5, text:'Travel'},
        {id:6, text:'Personal'},
        {id:7, text:'Shopping'},
    ];;


    constructor(private _http: Http) {
        console.log('TODO Service Started.');
    }

    getCategories(){
        return this.categories;
        // return this._http.get(this.url + '/todos/categories')
        // .map(res => res.json());
    }
    getTodos() {
        console.log('Return TODO.');
        return this.todo;
        // return this._http.get(this.url + '/todos')
        // .map(res => res.json());
    }

    todoByCat(cat: number) {
        console.log('Return TODO by category.');
        // return this._http.get(this.url + '/todos/' + cat)
        //     .map(res => res.json());
    }

    todoByStatus(status: string) {
        console.log('Return TODO by status.');
        // return this._http.get(this.url + '/todos/' + status)
        //     .map(res => res.json());
    }

    saveTodo(task: string, category: string) {
        console.log('Saving TODO.');
        console.log(task, category);
        // var headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        // return this._http.post(this.url + '/todo', {task:task, category:category}, { headers: headers })
        //     .map(res => res.json());
    }

    updateTodo(todo: TODO) {
        console.log('Updating TODO');
        console.log(todo);
        // var headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        // return this._http.put(this.url + '/todo/' + todo.id, { category: todo.category, task: todo.task, statuses: [todo.statuses] }, { headers: headers })
        //     .map(res => res.json());
    }

    deleteTodo(id: number) {
        console.log('Deleting TODO');
        console.log(id);
        // return this._http.delete(this.url + '/todo/' + id)
        //     .map(res => res.json());
    }
}