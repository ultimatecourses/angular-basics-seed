import {Component, OnInit} from '@angular/core';

import { Donut } from "../../models/donut.model";

@Component({
  selector: 'app-donut-list',
  template: `
      <div>
        <div> <donut-card></donut-card> </div>
          <div class="donut-card">
              <img
                      src="/assets/img/{{ donut.icon }}.svg"
                      [alt]="donut.name"
                      class="donut-card-icon"
              />
          </div>
          <div>
            <p class="dunut-card-name">
              {{ donut.name }}
            </p>
            <p class="dunut-card-price">
              {{ donut.price }}
            </p>
          </div>
      </div>
  `,
  styles: [
  ]
})
export class DonutListComponent implements OnInit {
  // Declaratie hier maar vullen in ngOnInit()
  donut!: Donut;
  donuts!: Donut[];

  constructor() {}

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
    this.donut = this.donuts[0];
  }
}
