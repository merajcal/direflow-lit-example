import { observable, computed, action } from "mobx";

class TodoList {
    @observable todos = [
        {id: 1, title: 'Task 1', finished: false, favorite: true},
        {id: 2, title: 'Task 2', finished: false, favorite: false}
    ]


    @observable selectedTodo = this.todos[0];

    @computed get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length
    }

    @computed get selectedTask() {
        const selected =  this.selectedTodo;
        console.log('Getting selected task from store ', JSON.stringify(selected))
        return selected;
    }


     @action setSelectTask(id) {
        this.selectedTodo = this.todos.filter(todo => todo.id == id)[0]
      }
}

export const STORE = {
    todo: new TodoList()
}