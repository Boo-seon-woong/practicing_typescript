import TodoItem from "../model/TodoItem";
import { ItemCount } from "../model/itemCount";
const a:TodoItem = new TodoItem(1,'a',false);
class TodoCollection{
    private nextId : number=1;
    
    private itemMap : Map<number,TodoItem>;

    constructor(public userName:string, public todoItems:TodoItem[] = []){
        this.itemMap= new Map<number,TodoItem>();
        todoItems.forEach((item)=> this.itemMap.set(item.id,item));
    }

    getItemCounts():ItemCount {
        return {
            total: this.itemMap.size,
            incomplete: this.getTodoItems(false).length,
        };
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
        this.itemMap.forEach((item) => {
            if(item.complete){
                this.itemMap.delete(item.id);
            }
        })
        /*this.itemMap.forEach(function(value,key){
            if(value.complete){
                this.itemMap.delete(key);
            }
        })왜 익명함수 말고 화살표함수를 써야 되는지는 이 주석을 실행시켜 보면 알 수 있음*/
    }

    markComplete(id : number, complete : boolean) : void{
        const todoItem = this.getTodoById(id);
        if(todoItem){
            todoItem.complete = complete;
        }
    }
}

export default TodoCollection;