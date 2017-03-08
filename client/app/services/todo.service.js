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
                task: "Pick up groceries",
                isCompleted: false,
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
        console.log('TODO Service Started.');
    }
    TodoService.prototype.getTodos = function () {
        console.log('Return TODO.');
        return this.todo;
        // return this._http.get(this.url + '/todos')
        // .map(res => res.json());
    };
    TodoService.prototype.todoByCat = function (cat) {
        console.log('Return TODO.');
        return this._http.get(this.url + '/todos/' + cat)
            .map(function (res) { return res.json(); });
    };
    TodoService.prototype.todoByStatus = function (status) {
        console.log('Return TODO.');
        return this._http.get(this.url + '/todos/' + status)
            .map(function (res) { return res.json(); });
    };
    TodoService.prototype.saveTodo = function (newTodo) {
        console.log('Save TODO.');
        return this.todo;
    };
    TodoService.prototype.updateTodo = function (todo) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.put(this.url + '/api/v1/todo/' + todo.id, JSON.stringify(todo), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TodoService.prototype.deleteTodo = function (id) {
        return this._http.delete(this.url + '/todo/' + id)
            .map(function (res) { return res.json(); });
    };
    return TodoService;
}());
TodoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TodoService);
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map