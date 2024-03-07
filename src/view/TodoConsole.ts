import * as inquirer from 'inquirer';
import TodoCollection from '../service/TodoCollection';
import TodoItem from '../model/TodoItem';
import { data } from '../data';

import ListPrompt from 'inquirer/lib/prompts/list';
class TodoConsole{
    private todoCollection : TodoCollection;

    constructor(){

        const sampleTodos : TodoItem[] = data.map(
            (item) => new TodoItem(item.id, item.task,item.complete)
        );

        this.todoCollection = new TodoCollection('My todo List');
    }

    displayTodoList():void{
        console.log(
            `=====${this.todoCollection.userName}=====` + 
            `(${this.todoCollection.getItemCounts().incomplete} items todo)`
        )
        this.todoCollection.getTodoItems(true).forEach((item)=>item.printDetails());
    }

    promptUser():void{
        console.clear();
        this.displayTodoList();
        
        inquirer.prompt({

        })

    }
}