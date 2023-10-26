import {Component, Input, ViewEncapsulation} from '@angular/core';
import {Donut} from "../../models/donut.model";

@Component({
  selector: 'donut-card',
  // encapsulation: ViewEncapsulation.Emulated, // Is de default dat wil zeggen dat nu de css van styles.scss genomen wordt
  encapsulation: ViewEncapsulation.ShadowDom, // Niet van styles.scss maar van styles: [ .app  { margin: 25px auto;
    // styles: [
    //   `
    //   .app {
    //     background: #fff;
    //     border-radius: 8px;
    //     max-width: 400px;
    //     width: 94%;
    //     margin: 25px auto;
    //     padding: 25px;
    //     border: 4px solid #ef9fc7;
    //   }
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
