import {Component, Input} from '@angular/core';
import {Donut} from "../../models/donut.model";

@Component({
  selector: 'donut-card',
  template: `
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
  `,
  styles: [
  ]
})
export class DonutCardComponent {
  @Input() donut!: Donut;
}
