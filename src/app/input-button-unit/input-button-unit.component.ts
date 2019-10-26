import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'todo-input-button-unit',
  template: `
    <p>
      input-button-unit works!
      The title is: {{ title }}
    </p>

    <input [value]="title">
    <button (click)="changeTitle('Button Clicked!')">
      Save
    </button>
  `,
  styleUrls: ['./input-button-unit.component.css']
})




export class InputButtonUnitComponent implements OnInit {

  title = "Hello World"

  changeTitle(newTitle: string){
    this.title = newTitle;
  }

  constructor(){

  }

  ngOnInit(){

  }

}
