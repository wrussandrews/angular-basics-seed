import {Component, OnInit} from '@angular/core';
import {Donut} from "../../models/donut.model";

@Component({
  selector: 'donut-list',
  template: `
    <div>
      <ng-container *ngIf="donuts.length; else nothing">
        <donut-card *ngFor="let donut of donuts; trackBy: trackById"
          [donut]="donut"></donut-card>
      </ng-container>

      <ng-template #nothing>
        <p>No donuts here...</p>
      </ng-template>

    </div>
  `,
  styles: [ ]
})
export class DonutListComponent implements OnInit {
  donuts!: Donut[];

  constructor() { }

  ngOnInit() : void {
    this.donuts = [       {
      id: '11111',
      name: 'Just Chocolate',
      icon: 'just-chocolate',
      price: 119,
      promo: 'limited',
      description: 'For the pure chocoholic.'
    },
      {
        id: '22222',
        name: 'Glazed Fudge',
        icon: 'glazed-fudge',
        price: 129,
        promo: 'new',
        description: 'Sticky perfection.'
      },
      {
        id: '33333',
        name: 'Caramel Swirl',
        icon: 'caramel-swirl',
        price: 129,
        description: 'Chocolate drizzled with caramel.'
      },
      {
        id: '4444',
        name: 'Sour Supreme',
        icon: 'sour-supreme',
        price: 139,
        description: 'For the sour advocate.'
      },
      {
        id: '55555',
        name: 'Zesty Lemon',
        icon: 'zesty-lemon',
        price: 129,
        description: 'Delicious luscious lemon.'
      },

    ];
  }

  trackById(index: number, value: Donut)
  {
    return value.id;
  }

}
