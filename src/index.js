class TodoItem {
    constructor(id,task,complete){
        this.id=id;
        this.task=task;
        this.complete=complete;
    }
    printDetails(){
        console.log(`${this.id}\t${this.task}\t${this.complete ? "complete\t":""}`);
    }
}
const data = [
    {id:1, task:'a',complete:'false'},
    {id:2, task:'b',complete:'true'}
]
let todoitem="아니 c++이었으면 진작에 터졌다니까? let으로 선언하면 중복 안된대매 왜이러는데 진짜";
for(let i=0;i<data.length;i++){
    let todoitem= new TodoItem(data[i].id,data[i].task,data[i].complete)
    todoitem.printDetails();
}