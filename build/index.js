"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TodoItem_1 = __importDefault(require("./TodoItem"));
console.log("hello javascript and typescript!");
console.log("and also we got a tsconfig too lol");
console.log("\n\n\nand also npm init -y, nodemon, currently also hello! from now on, build and run will be simultaneously processed with only comment 'npm start' becuase of tsconfig");
const data = [
    { id: 1, task: 'a', complete: false },
    { id: 2, task: 'b', complete: true }
];
console.log('my todo list\n');
for (let i = 0; i < data.length; i++) {
    let todoitem = new TodoItem_1.default(data[i].id, data[i].task, data[i].complete);
    todoitem.printDetails();
}
