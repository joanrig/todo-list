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
          <todo-todo-item [item]="todoItem"></todo-todo-item>
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
    this.todoList.push({ title })
  }

}
