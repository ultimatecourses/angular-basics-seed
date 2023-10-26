import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-donut-list',
  template: `
      <div>
        // pipe to json
        {{ donut | json }}
          <div>
              {{ donut.name }}
              {{ donut.price }}
          </div>
      </div>
  `,
  styles: [
  ]
})
export class DonutListComponent implements OnInit {
  // Declaratie hier maar vullen in ngOnInit()
  donut!: any;
  donuts!: any[];

  constructor() {}

  ngOnInit(): void {
    this.donuts = [
      {
        id: 'xy12yr',
        name: 'Just Chocolate',
        icon: 'jus-chocolate',
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
