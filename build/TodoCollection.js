"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TodoItem_1 = __importDefault(require("./TodoItem"));
const a = new TodoItem_1.default(1, 'a', false);
class TodoCollection {
    userName;
    todoItems;
    nextId = 1;
    itemMap;
    constructor(userName, todoItems = []) {
        this.userName = userName;
        this.todoItems = todoItems;
        this.itemMap = new Map();
        todoItems.forEach((item) => this.itemMap.set(item.id, item));
    }
    getTodoById(id) {
        return this.itemMap.get(id);
    }
    addTodo(task) {
        while (this.getTodoById(this.nextId)) {
            this.nextId++;
        }
        this.itemMap.set(this.nextId, new TodoItem_1.default(this.nextId, task));
        return this.nextId;
    }
    /*요건 영상 보기 전에 내가 먼저 만들어본 코드. 딱히 틀린 건 없지만 영상에서 나온 코드에서 배울 점이 더 많다고 생각돼서 주석처리함
        getTodoItems(includecomplete : boolean) : TodoItem[] {
            const result : TodoItem[] = [];
            this.itemMap.forEach(function(value,key){if(value.complete===includecomplete) result.push(value)});
            return result;
        }
    */
    getTodoItems(includecomplete) {
        return [...this.itemMap.values()].filter((item) => includecomplete || !item.complete);
    }
    removeComplete() {
        /*this.itemMap.forEach((item) => {
            if(item.complete){
                this.itemMap.delete(item.id);
            }
        })*/
        this.itemMap.forEach(function (value, key) {
            if (value.complete) {
                this.itemMap.delete(key);
            }
        });
    }
    markComplete(id, complete) {
        const todoItem = this.getTodoById(id);
        if (todoItem) {
            todoItem.complete = complete;
        }
    }
}
exports.default = TodoCollection;
