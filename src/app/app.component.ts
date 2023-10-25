import { Component, OnInit } from '@angular/core';
import * as events from "events";

@Component({
  selector: 'app-root',
  template: `
    <div class="app">
      <app-donut-list></app-donut-list>
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
