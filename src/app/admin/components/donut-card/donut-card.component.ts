import {Component, Input} from '@angular/core';
import {Donut} from "../../models/donut.model";

@Component({
  selector: 'donut-card',
  template: `
      <img
        src="/assets/img/{{ donut.icon }}.svg"
        [alt]="donut.name"
        class="donut-card-icon"
      />
      <div>
        <p class="donut-card-name">
          {{ donut.name }}
        </p>
        <p class="donut-card-price">
          {{ donut.price }}
        </p>
      </div>

  `,
  styles: [
    `
      :host {
        display: flex;
        align-items: center;
        background: #f7f7f7;
        border-radius: 5px;
        margin-bottom: 5px;
        padding: 5px 15px;
        transition: transform 0.2s ease-in-out;
        &:hover {
          transform: translateY(-3px);
        }
      }
      .donut-card { // verwijst naar <div class="donut-card">
        &-name {  // nieuw in "style": "scss" Hierdoor hoef je niet de volledige class op te geven en verwijst naar <p class="donut-card-name">
                  // "scss" wordt uitgesproken als sass
          font-size: 16px;
        }
        &-price { // verwijst naar <p class="donut-card-price">
          font-size: 14px;
          color: #c14583;
        }
        &-icon { // verwijst naar <p class="donut-card-icon">
          width: 50px;
          margin-right: 10px;
        }
      }
    `,
  ]
})
export class DonutCardComponent {
  @Input() donut!: Donut;
}
