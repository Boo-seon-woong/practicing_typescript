import TodoItem from "./TodoItem";
const a:TodoItem = new TodoItem(1,'a',false);
class TodoCollection{
    private nextId : number=1;
    
    private itemMap : Map<number,TodoItem>;

    constructor(public userName:string, public todoItems:TodoItem[] = []){
        this.itemMap= new Map<number,TodoItem>();
        todoItems.forEach((item)=> this.itemMap.set(item.id,item));
    }


    getTodoById(id: number):TodoItem | undefined{
        return this.itemMap.get(id);
    }
    addTodo(task:string) :number | undefined{
        while(this.getTodoById(this.nextId)){
            this.nextId++;
        }
        this.itemMap.set(this.nextId,new TodoItem(this.nextId,task,));
        return this.nextId;
    }
/*요건 영상 보기 전에 내가 먼저 만들어본 코드. 딱히 틀린 건 없지만 영상에서 나온 코드에서 배울 점이 더 많다고 생각돼서 주석처리함
    getTodoItems(includecomplete : boolean) : TodoItem[] {
        const result : TodoItem[] = [];
        this.itemMap.forEach(function(value,key){if(value.complete===includecomplete) result.push(value)});
        return result;
    }
*/
    getTodoItems(includecomplete : boolean) : TodoItem[] {
        return [...this.itemMap.values()].filter((item) => includecomplete || !item.complete)
    }

    removeComplete():void {
        /*this.itemMap.forEach((item) => {
            if(item.complete){
                this.itemMap.delete(item.id);
            }
        })*/
        this.itemMap.forEach(function(value,key){
            if(value.complete){
                this.itemMap.delete(key);
            }
        })
    }

    markComplete(id : number, complete : boolean) : void{
        const todoItem = this.getTodoById(id);
        if(todoItem){
            todoItem.complete = complete;
        }
    }
}

export default TodoCollection;