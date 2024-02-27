import { data } from "./data";
import TodoCollection from "./TodoCollection";
import TodoItem from "./TodoItem";
console.log("hello javascript and typescript!");
console.log("and also we got a tsconfig too lol");
console.log("\n\n\nand also npm init -y, nodemon, currently also hello! from now on, build and run will be simultaneously processed with only comment 'npm start' becuase of tsconfig")



const sampleTodos : TodoItem[] = data.map(
    (item) => new TodoItem(item.id,item.task,item.complete)
);

const myTodoCollection = new TodoCollection("My Todo List", sampleTodos);

myTodoCollection.addTodo("JavaScript 학습하기");

//console.log(myTodoCollection.getTodoById(1));
myTodoCollection.markComplete(3,true);

console.log(`mytodocollection username--${myTodoCollection.userName}`);
const aaa : TodoItem[] = myTodoCollection.getTodoItems(true);
myTodoCollection.removeComplete();
const bbb : TodoItem[] = myTodoCollection.getTodoItems(false);
console.log(aaa);
console.log(bbb);
//myTodoCollection.itemMap.forEach((value,key)=>{console.log(key+value.task)});