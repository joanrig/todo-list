import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item'
import { StorageService } from './storage.service';




const todoListStorageKey = "Todo_List"

const defaultTodoList = [
  {title: 'install NodeJS'},
  {title: 'install Angular CLI'},
  {title: 'create new app'},
  {title: 'serve app'},
  {title: 'develop app'},
  {title: 'deploy app'},
];

@Injectable({
  providedIn: 'root'
})

export class TodoListService{
  todoList: TodoItem[];

  constructor(private storageService: StorageService){
    this.todoList =
        storageService.getData(todoListStorageKey) || defaultTodoList;}


}
