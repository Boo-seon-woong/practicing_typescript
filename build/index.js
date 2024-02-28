"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
const TodoCollection_1 = __importDefault(require("./TodoCollection"));
const TodoItem_1 = __importDefault(require("./TodoItem"));
console.log("hello javascript and typescript!");
console.log("and also npm init -y, nodemon, currently also hello! from now on, build and run will be simultaneously processed with only comment 'npm start' becuase of tsconfig");
//---------------------
const sampleTodos = data_1.data.map((item) => new TodoItem_1.default(item.id, item.task, item.complete));
const myTodoCollection = new TodoCollection_1.default("My Todo List", sampleTodos);
myTodoCollection.addTodo("JavaScript 학습하기");
myTodoCollection.markComplete(5, true);
myTodoCollection.getTodoItems(true).forEach((item) => item.printDetails());
myTodoCollection.addTodo("JavaScript 학습하기");
myTodoCollection.markComplete(6, true);
myTodoCollection.addTodo("JavaScript 학습하기");
myTodoCollection.markComplete(7, true);
myTodoCollection.addTodo("Typescript 학습하기");
myTodoCollection.addTodo("fuck why it is running");
myTodoCollection.removeComplete();
myTodoCollection.addTodo("removecomplete 함수 에러 수정하기");
myTodoCollection.getTodoItems(true).forEach((item) => item.printDetails());
console.log("   <<completed list>>>\n");
//야야야ㅑㅇ 니 아직 영상 중간에 removecomplete 다 안만듬 꼭 이어서 공부해라
