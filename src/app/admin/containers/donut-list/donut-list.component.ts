import {Component, OnInit} from '@angular/core';
import {Donut} from "../../models/donut.model";

@Component({
  selector: 'donut-list',
  template: `
    <div>
      <donut-card [donut]="donuts[0]"></donut-card>
      <donut-card [donut]="donuts[1]"></donut-card>
      <donut-card [donut]="donuts[2]"></donut-card>
    </div>
  `,
  styles: [ ]
})
export class DonutListComponent implements OnInit {
  donuts!: Donut[];

  constructor() { }

  ngOnInit() : void {
    this.donuts = [
      {
        id: '11111',
        name: 'Just Chocolate',
        icon: 'just-chocolate',
        price: 119,
        description: 'For the pure chocoholic.'
      },
      {
        id: '22222',
        name: 'Glazed Fudge',
        icon: 'glazed-fudge',
        price: 129,
        description: 'Sticky perfection.'
      },
      {
        id: '33333',
        name: 'Caramel Swirl',
        icon: 'caramel-swirl',
        price: 129,
        description: 'Chocolate drizzled with caramel.'
      },
    ];
  }

}
