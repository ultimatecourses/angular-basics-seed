import {Component, OnInit} from '@angular/core';

import { Donut } from "../../models/donut.model";

@Component({
  selector: 'donut-list',
  template: `
        // ng-container vs ng-template:
        // Een ng-container wordt altijd gerendered
        // terwijl een ng-template pas gerenderd wordt op basis van een voorwaarde
        // Volgende zijn gelijk
        <div>
            <ng-container *ngIf="donuts.length; else nothing">
                <donut-card [donut]="donuts[0]"></donut-card>
                <donut-card [donut]="donuts[1]"></donut-card>
                <donut-card [donut]="donuts[2]"></donut-card>
            </ng-container>

            <ng-template [ngIf]="donuts.length" [ngIfElse]="nothing">
                <donut-card [donut]="donuts[0]"></donut-card>
                <donut-card [donut]="donuts[1]"></donut-card>
                <donut-card [donut]="donuts[2]"></donut-card>
            </ng-template>

          // Volgende wordt niet gerenderd
            <ng-template>
                <donut-card [donut]="donuts[0]"></donut-card>
                <donut-card [donut]="donuts[1]"></donut-card>
                <donut-card [donut]="donuts[2]"></donut-card>
            </ng-template>

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
}
