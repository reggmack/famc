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
var todo_service_1 = require("../services/todo.service");
var todo_1 = require("../model/todo");
var TODOComponent = (function () {
    function TODOComponent(_todoService) {
        this._todoService = _todoService;
    }
    TODOComponent.prototype.ngOnInit = function () {
        // for mock data
        this.ttodo = this._todoService.getTodos();
        // this._todo.getTodos().subscribe(todo => {
        //     this.todo = todo;
        // });
    };
    TODOComponent.prototype.edit = function () {
    };
    TODOComponent.prototype.addTodo = function (event, todoText) {
        var result;
        var newTodo = {
            text: todoText.value,
            isCompleted: false
        };
        result = this._todoService.saveTodo(newTodo);
        this.ttodo.push(newTodo);
        todoText.value = '';
    };
    TODOComponent.prototype.setEditState = function (todo, state) {
        if (state) {
            todo.isEditMode = state;
        }
        else {
            delete todo.isEditMode;
        }
    };
    TODOComponent.prototype.updateStatus = function (todo) {
        var _todo = {
            _id: todo._id,
            text: todo.text,
            isCompleted: !todo.isCompleted
        };
        this._todoService.updateTodo(todo)
            .subscribe(function (data) {
            todo.isCompleted = !todo.isCompleted;
        });
    };
    TODOComponent.prototype.updateTodoText = function (event, todo) {
        var _this = this;
        if (event.which === 13) {
            todo.text = event.target.value;
            var _todo = {
                _id: todo._id,
                text: todo.text,
                isCompleted: todo.isCompleted
            };
            this._todoService.updateTodo(todo)
                .subscribe(function (data) {
                _this.setEditState(todo, false);
            });
        }
    };
    TODOComponent.prototype.deleteTodo = function (todo) {
        var todos = this.todo;
        this._todoService.deleteTodo(todo._id)
            .subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < todos.length; i++) {
                    if (todos[i].id == todo._id) {
                        todos.splice(i, 1);
                    }
                }
            }
        });
    };
    return TODOComponent;
}());
TODOComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'todos',
        templateUrl: 'todos.component.html',
        providers: [todo_1.TODO]
    }),
    __metadata("design:paramtypes", [todo_service_1.TodoService])
], TODOComponent);
exports.TODOComponent = TODOComponent;
//# sourceMappingURL=todos.component.js.map