import {Component, Input, ViewEncapsulation} from '@angular/core';
import {Donut} from "../../models/donut.model";

@Component({
  selector: 'donut-card',
  encapsulation: ViewEncapsulation.Emulated, // Is de default dat wil zeggen dat nu de css van styles.scss genomen wordt
  template: `
      <div
              class="donut-card"
              [ngClass]="{
                'donut-card-promo': donut.promo,
                'donut-card-not-promo': !donut.promo
            }"
      >
<!--     enkel de TRUE conditions worden toegevoegd in de html >>
            inspect vb: <div _ngcontent-qke-c12="" class="donut-card donut-card-not-promo"
            enkel -not-promo wordt toegevoegd indien promo = false
 -->
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
    </div>

  `,
  styles: [
    `
      .donut-card {
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
        &-name {
          font-size: 16px;
        }
        &-price {
          font-size: 14px;
          color: #c14583;
        }
        &-promo {
          border: 2px solid #eee;
        }
        &-icon {
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
