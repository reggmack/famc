"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var TodoService = (function () {
    function TodoService(_http) {
        this._http = _http;
        this.url = 'https://api.example.com';
        this.todo = [
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
        this.categories = [
            { id: 1, text: 'General' },
            { id: 2, text: 'Grocery List' },
            { id: 3, text: 'Education' },
            { id: 4, text: 'Business' },
            { id: 5, text: 'Travel' },
            { id: 6, text: 'Personal' },
            { id: 7, text: 'Shopping' },
        ];
        console.log('TODO Service Started.');
    }
    ;
    TodoService.prototype.getCategories = function () {
        return this.categories;
        // return this._http.get(this.url + '/todos/categories')
        // .map(res => res.json());
    };
    TodoService.prototype.getTodos = function () {
        console.log('Return TODO.');
        return this.todo;
        // return this._http.get(this.url + '/todos')
        // .map(res => res.json());
    };
    TodoService.prototype.todoByCat = function (cat) {
        console.log('Return TODO by category.');
        // return this._http.get(this.url + '/todos/' + cat)
        //     .map(res => res.json());
    };
    TodoService.prototype.todoByStatus = function (status) {
        console.log('Return TODO by status.');
        // return this._http.get(this.url + '/todos/' + status)
        //     .map(res => res.json());
    };
    TodoService.prototype.saveTodo = function (task, category) {
        console.log('Saving TODO.');
        console.log(task, category);
        // var headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        // return this._http.post(this.url + '/todo', {task:task, category:category}, { headers: headers })
        //     .map(res => res.json());
    };
    TodoService.prototype.updateTodo = function (todo) {
        console.log('Updating TODO');
        console.log(todo);
        // var headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        // return this._http.put(this.url + '/todo/' + todo.id, { category: todo.category, task: todo.task, statuses: [todo.statuses] }, { headers: headers })
        //     .map(res => res.json());
    };
    TodoService.prototype.deleteTodo = function (id) {
        console.log('Deleting TODO');
        console.log(id);
        // return this._http.delete(this.url + '/todo/' + id)
        //     .map(res => res.json());
    };
    return TodoService;
}());
TodoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TodoService);
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map