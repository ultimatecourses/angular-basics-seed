import {Component, OnInit} from '@angular/core';

import { Donut } from "../../models/donut.model";

@Component({
  selector: 'donut-list',
  template: `
      <div>
          <ng-container *ngIf="donuts.length; else nothing">
              <donut-card
                      *ngFor="let donut of donuts; trackBy: trackById;"
                      [donut]="donut">
              </donut-card>
          </ng-container>

          <ng-template #nothing>
              <p>No Donust here..</p>
          </ng-template>
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
        promo: 'limited',
        description: 'For the pure chocoholic.',
      },
      {
        id: 'zy19yr',
        name: 'Glazed Fudge',
        icon: 'glazed-fudge',
        price: 129,
        promo: 'new',
        description: 'Sticky perfection.',
      },
      {
        id: 'qy19ya',
        name: 'Caramel Swirl',
        icon: 'caramel-swirl',
        price: 129,
        description: 'Chocolate drizzled with caramel',
      },
      {
        id: '2dfe5',
        name: 'Sour Supreme',
        icon: 'sour-supreme',
        price: 139,
        description: 'For the sour advocate.',
      },
      {
        id: 'a6rfg',
        name: 'Zesty Lemon',
        icon: 'zesty-lemon',
        price: 129,
        description: 'Delicious luscious lemon.',
      }
    ]
  }

  trackById(index: number, value: Donut) {
    return value.id;

  }
}
