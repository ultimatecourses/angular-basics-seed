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
            // Bovenste *ngIf (astrix staat voor template, angular zet dit achterliggend om naar:
              <ng-template ngFor [ngForOf]="donuts" let-donut let-i="index">
                  <donut-card [donut]="donut"></donut-card>
                {{ i }}
              </ng-template>
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
        description: 'For the pure chocoholic.',
      },
      {
        id: 'zy19yr',
        name: 'Glazed Fudge',
        icon: 'glazed-fudge',
        price: 129,
        promo: true,
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

  trackById(index: number, value: Donut) {
    return value.id;

  }
}
