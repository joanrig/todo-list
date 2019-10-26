import { Component, OnInit, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'todo-input-button-unit',
  template: `
    <input #inputElementRef [value]="title"
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

  title = "Hello World"


  constructor(){
  }

  ngOnInit(){
  }

  submitValue(newTitle: string){
    this.submit.emit(newTitle)
  }

}
