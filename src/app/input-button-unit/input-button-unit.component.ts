import { Component, OnInit, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'todo-input-button-unit',
  template: `
    <input class="todo-input"
          #inputElementRef
          [value]="title"
          (keyup.enter)="submitValue($event.target.value)">

    <button class="btn"
            (click)="submitValue(inputElementRef.value)">
      Save
    </button>

  `,
  styleUrls: ['./input-button-unit.component.css']
})




export class InputButtonUnitComponent implements OnInit {

  @Output() submit: EventEmitter<string> = new EventEmitter();

  title = "what do you need to do? (type it here)"


  constructor(){
  }

  ngOnInit(){
  }

  submitValue(newTitle: string){
    this.submit.emit(newTitle)
  }

}
