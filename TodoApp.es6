import {Component, Template, bootstrap,Foreach} from 'angular2/angular2';
import {TodoStore} from 'services/TodoStore';
@Component({
  selector: 'todo-app',
  componentServices: [
      TodoStore
  ]
})
@Template({
  url: 'templates/todo.html',
  directives: [Foreach]
})
class TodoApp {

  todoStore : TodoStore;

  constructor(todoStore: TodoStore) {
    this.todoStore = todoStore;
  }

  add($event,newtodo){
      if($event.which === 13){
        this.todoStore.add(newtodo.value);
        newtodo.value = '';
      }
  }

  toggleTodoState(todo){
    todo.done = !todo.done;
  }

}

bootstrap(TodoApp);