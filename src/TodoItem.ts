class TodoItem{

    constructor(public id:number,public task:string,public complete:boolean){
        this.id=id;
        this.task=task;
        this.complete=complete;
    }

    printDetails():void {
        console.log(`${this.id}\t${this.task}\t${this.complete ? "complete\t":""}`);
    }
}

export default TodoItem;