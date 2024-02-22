import TodoItem from "./TodoItem";

class TodoCollection{
    private nextId : number=1;
    
    constructor(public userName:string, public todoItems:TodoItem[] = []){}

    getTodoById(id: number):TodoItem | undefined{
        return this.todoItems.find((item) => item.id == id);
    }
    addTodo(task:string) :number | undefined{
        while(this.getTodoById(this.nextId)){
            this.nextId++;
        }
        this.todoItems.push(new TodoItem(this.nextId,task));
        return this.nextId;
    }

    markComplete(id : number, complete : boolean) : void{
        const todoItem = this.getTodoById(id);
        if(todoItem){
            todoItem.complete = complete;
        }
    }
}

export default TodoCollection;