export class TodoStore {
    constructor(){
        this.todoList = [];
    }
    add(item){
        this.todoList.unshift({text:item,done:false});
    }
}