import { Component } from '@angular/core';
import { TodoItem } from './interfaces/todo-item'

@Component({
  selector: 'app-root',
  template: `
    <h1>
      Welcome to {{ title }}!
    </h1>

    <todo-input-button-unit (submit)="addItem($event)"></todo-input-button-unit>

    <ul>
      <li *ngFor="let todoItem of todoList">
        <todo-todo-item [item]="todoItem"></todo-todo-item>
      </li>
    </ul>
  `,
  styleUrls: ['./app.component.css']
})


export class AppComponent {
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
