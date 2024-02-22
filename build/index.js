"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
const TodoCollection_1 = __importDefault(require("./TodoCollection"));
const TodoItem_1 = __importDefault(require("./TodoItem"));
console.log("hello javascript and typescript!");
console.log("and also we got a tsconfig too lol");
console.log("\n\n\nand also npm init -y, nodemon, currently also hello! from now on, build and run will be simultaneously processed with only comment 'npm start' becuase of tsconfig");
const sampleTodos = data_1.data.map((item) => new TodoItem_1.default(item.id, item.task, item.complete));
const myTodoCollection = new TodoCollection_1.default("My Todo List", sampleTodos);
myTodoCollection.addTodo("JavaScript 학습하기");
myTodoCollection.markComplete(3, true);
console.log(`mytodocollection username--${myTodoCollection.userName}`);
myTodoCollection.todoItems.forEach((item) => item.printDetails());
