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
    function TODOComponent(_todo) {
        this._todo = _todo;
        this.id = null;
        this.task = null;
        this.category = null;
        this.isComplete = null;
        this.isSelected = false;
    }
    TODOComponent.prototype.ngOnInit = function () {
        this.categories = this._todo.getCategories();
        this.todo = this._todo.getTodos();
        // this._todo.getTodos().subscribe(todo => {
        //     this.todo = todo;
        // });
    };
    TODOComponent.prototype.save = function () {
        this._todo.saveTodo(this.task, this.category); //.subscribe(res => {
        //     this.todo = res;
    };
    TODOComponent.prototype.update = function (todo) {
        // console.log('Editing' + todo.id);
        this.task = todo.task;
        this.category = todo.category;
        this.isComplete = todo.statuses.description == "Completed";
        console.log(todo);
        console.log(todo.category);
        this._todo.updateTodo(todo);
    };
    TODOComponent.prototype.delete = function (id) {
        // console.log('Deleting ' + id);
        this._todo.deleteTodo(id);
    };
    TODOComponent.prototype.toggle = function (todo) {
        this.todo.isComplete = this.todo.isComplete == true ? true : false;
        console.log(todo);
    };
    return TODOComponent;
}());
TODOComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'todo',
        templateUrl: "todo.component.html",
        styleUrls: ['todo.component.css'],
        providers: [todo_1.TODO]
    }),
    __metadata("design:paramtypes", [todo_service_1.TodoService])
], TODOComponent);
exports.TODOComponent = TODOComponent;
//# sourceMappingURL=todo.component.js.map