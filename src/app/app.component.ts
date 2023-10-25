import { Component, OnInit } from '@angular/core';
import * as events from "events";

@Component({
  selector: 'app-root',
  template: `
    <div class="app">
<!--      One Way Data Binding-->
<!--      Interpolation of sugar-syntax. dit doet achter de schermen hetzelfde als property binding -->
      <h4>{{ message }}</h4>
<!--      Interpolation met logica indien message leeg print 'Nothing here...' anders message -->
      <h4>{{ message.length ? message : 'Nothing here...' }}</h4>
<!--      property binding via setting the property [innerText], [value]-->
      <h4><input [value]="message"></h4>
      <h4 [innerText]="message"></h4>
      <h4 [innerText]="message.length ? message : 'Nothing here...'"></h4>
<!--      event binding via property binding and updates via (input) event -->
      <h4><input [value]="message" (input)="handleInput($event)"></h4>
      <h4 (click)="handleClick($event)"> {{ newMessage.length < 12 ? newMessage : 'to big' }}</h4>
<!--      Simplified event binding via Template Ref Variable. -->
      <h4><input [value]="message" (input)="newMessage= myTemplateRefVariable.value "  #myTemplateRefVariable></h4>
      <h4> {{ myTemplateRefVariable.value }}</h4>
    </div> `,
  styles: [
    `
      .app {
        margin-top: 50px;
        font-size: 22px;
        color: #fff;
        text-align: center;
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  message!: string;
  newMessage!: string;

  ngOnInit() {
   this.message = 'Value on init';
  }

  handleClick(event: MouseEvent) {
    console.log(event);
  }

  handleInput(event: Event) {
    const { value } = event.target as HTMLInputElement;
    console.log(value);
    this.newMessage = value;
   }
}
