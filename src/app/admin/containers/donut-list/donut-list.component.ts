import {Component, OnInit} from '@angular/core';

import { Donut } from "../../models/donut.model";

@Component({
  selector: 'donut-list',
  template: `
      <div>
        <div> <donut-card [donut]="donuts[0]"></donut-card> </div>
        <div> <donut-card [donut]="donuts[1]"></donut-card> </div>
        <div> <donut-card [donut]="donuts[2]"></donut-card> </div>
      </div>
  `,
  styles: [
  ]
})
export class DonutListComponent implements OnInit {
  // Declaratie hier maar vullen in ngOnInit()
  donuts!: Donut[];

  ngOnInit(): void {
    this.donuts = [
      {
        id: 'xy12yr',
        name: 'Just Chocolate',
        icon: 'just-chocolate',
        price: 119,
        description: 'For the pure chocoholic.',
      },
      {
        id: 'zy19yr',
        name: 'Glazed Fudge',
        icon: 'glazed-fudge',
        price: 129,
        description: 'Sticky perfection.',
      },
      {
        id: 'qy19ya',
        name: 'Caramel Swirl',
        icon: 'caramel-swirl',
        price: 129,
        description: 'Chocolate drizzled with caramel',
      }
    ]
  }
}
