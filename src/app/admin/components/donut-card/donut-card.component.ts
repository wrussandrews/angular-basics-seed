import {Component, Input} from '@angular/core';
import {Donut} from "../../models/donut.model";

@Component({
  selector: 'donut-card',
  template:  `
        <a class="donut-card"
             [routerLink]="donut.id"
             [ngClass]="{
                'donut-card-promo': donut.promo
             }">
          <img src="/assets/img/{{donut.icon}}.svg"
               [alt]="donut.name"
               class="donut-card-icon"/>
          <div>
            <p class="donut-card-name">
              {{donut.name}}

              <ng-container [ngSwitch]="donut.promo">
                <ng-container *ngSwitchCase="'new'">
                  <span class="donut-card-label">
                      NEW
                  </span>
                </ng-container>
                <ng-container *ngSwitchCase="'limited'">
                  <span class="donut-card-label">
                      LIMITED
                  </span>
                </ng-container>
              </ng-container>


            </p>
            <p class="donut-card-price">{{donut.price / 100 | currency}}</p>
          </div>
       </a>
  `,
  styles: [
    `      .donut-card {
        display: flex;
        align-items: center;
        background: #f7f7f7;
        border-radius: 5px;
        margin: 5px;
        padding: 5px 15px;
        transition: transform 0.2s ease-in-out;
        &:hover {
          transform: translateY(-3px);
        }

        &-promo {
          border: 2px solid #eee;
        }

        &-name {
          font-size: 16px;
        }

        &-label {
          border: 1px solid #c14583;
          border-radius: 4px;
          padding: 0 4px;
          margin-right: 5px;
          font-size: 12px;
          color: #c14583;
        }

        &-price {
          font-size: 16px;
          color: #c14583;
        }
        &-icon {
          width: 50px;
          margin-right: 10px;
        }
      }

    `,
  ]
})
export class DonutCardComponent{
  @Input() donut!: Donut;

}
