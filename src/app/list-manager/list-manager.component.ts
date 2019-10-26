import { Component, OnInit } from '@angular/core'
import { TodoItem } from '../interfaces/todo-item';


@Component({
  selector: 'todo-list-manager',
  template: `


    <todo-input-button-unit (submit)="addItem($event)"></todo-input-button-unit>

    <ul>
      <li *ngFor="let todoItem of todoList">
        <todo-todo-item [item]="todoItem"></todo-todo-item>
      </li>
    </ul>
  `,
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'todo-list';
  todoList = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];

  addItem(title: string){
    this.todoList.push({ title })
  }

}
