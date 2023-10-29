import {Component, OnInit} from '@angular/core';

import { Donut } from "../../models/donut.model";

@Component({
  selector: 'donut-list',
  template: `
      <div id="krko">
          <ng-container *ngIf="donuts.length; then cards; else nothing">
          </ng-container>
      </div>

      <ng-template #cards>
          <donut-card [donut]="donuts[0]"></donut-card>
          <donut-card [donut]="donuts[1]"></donut-card>
          <donut-card [donut]="donuts[2]"></donut-card>
      </ng-template>
      <ng-template #nothing>
          <p>No Donust here..</p>
      </ng-template>
  `,
  styles: [
  ]
})
export class DonutListComponent implements OnInit {
  // Declaratie hier maar vullen in ngOnInit()
  donuts!: Donut[];

  ngOnInit(): void {
    this.donuts = [
      // {
      //   id: 'xy12yr',
      //   name: 'Just Chocolate',
      //   icon: 'just-chocolate',
      //   price: 119,
      //   description: 'For the pure chocoholic.',
      // },
      // {
      //   id: 'zy19yr',
      //   name: 'Glazed Fudge',
      //   icon: 'glazed-fudge',
      //   price: 129,
      //   promo: true,
      //   description: 'Sticky perfection.',
      // },
      // {
      //   id: 'qy19ya',
      //   name: 'Caramel Swirl',
      //   icon: 'caramel-swirl',
      //   price: 129,
      //   description: 'Chocolate drizzled with caramel',
      // }
    ]
  }
}
