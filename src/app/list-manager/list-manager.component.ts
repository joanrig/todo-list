import { Component, OnInit } from '@angular/core'
import { TodoItem } from '../interfaces/todo-item';
import { TodoListService } from '../services/todo-list.service';


@Component({
  selector: 'todo-list-manager',
  template: `

    <div class="todo-app">
      <todo-input-button-unit (submit)="addItem($event)"></todo-input-button-unit>
      <ul>
        <li *ngFor="let todoItem of todoList">
          <todo-todo-item
            [item]="todoItem"
            (remove)="removeItem($event)"
            (update)="updateItem($event.item, $event.changes)">
          >
          </todo-todo-item>
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {
  todoList: TodoItem[];

  constructor(private todoListService:TodoListService) { }

  ngOnInit(){
    this.todoList = this.todoListService.getTodoList();
  }

  title = 'todo-list';

  addItem(title: string){
    const count = this.todoList.reduce((acc, item) => acc + (!item.completed ? 1 : 0), 0)

    console.log(count)

    if(count > 1){
      console.log('count is greater than 5')
      alert(`You already have ${count} incomplete items on your list, are you sure you want to add more?`)
    }



    const hasItem = this.todoList.find(item => item.title === title)
    if(hasItem){
      alert("This is already on your list!")
    }  else {
      this.todoList.push({ title })
    }


  }

  removeItem(item){
    this.todoListService.deleteItem(item)
  }

  updateItem(item, changes){
    this.todoListService.updateItem(item, changes)
  }

}
