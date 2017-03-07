import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { TODO } from '../model/todo';


@Injectable()
export class TodoService {
    private url = 'https://api.example.com';


   todo = [
            {
                id: '1',
                task: "Item 1",
                isCompleted: true,
                category: 'Items',
                statuses: [{
                                        description: "Created",
                                        date: "2017-02-02T18:24:03+00:00"
                },
                {
                                        description: "Completed",
                                        date: "2017-02-02T20:24:03+00:00"

                }
                ]

            }

        ];

    constructor(private _http: Http) {
        console.log('TODO Service Started.');
    }

    getTodos() {
        console.log('Return TODO.');
        return this.todo;
        // return this._http.get(this.url + '/todos')
            // .map(res => res.json());
    }

    todoByCat(cat: number){
        console.log('Return TODO.');
        return this._http.get(this.url + '/todos/' + cat)
            .map(res => res.json());
    }

    todoByStatus(status: string){
        console.log('Return TODO.');
        return this._http.get(this.url + '/todos/' + status)
            .map(res => res.json());
    }

    saveTodo(todo: TODO) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post(this.url + '/api/v1/todo', JSON.stringify(todo), {headers: headers})
            .map(res => res.json());
    }

    updateTodo(todo: TODO) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.put(this.url + '/api/v1/todo/'+todo.id, JSON.stringify(todo), {headers: headers})
            .map(res => res.json());
    }

    deleteTodo(id: number) {
        return this._http.delete(this.url + '/todo/'+ id)
            .map(res => res.json());
    }
}