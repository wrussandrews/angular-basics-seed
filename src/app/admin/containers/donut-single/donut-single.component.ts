import {Component, OnInit} from '@angular/core';
import {Donut} from "../../models/donut.model";

@Component({
  selector: 'donut-single',
  template: `
    <div>
      <donut-form [donut]="donut" (create)="onCreate($event)"></donut-form>
    </div>
  `,
  styles: [
  ]
})
export class DonutSingleComponent implements OnInit {

  donut!: Donut;

  onCreate(donut: Donut)
  {
    console.log('onCreate', donut);
  }

  ngOnInit(): void {
    this.donut = {
      id: '55555',
      name: 'Zesty Lemon',
      icon: 'zesty-lemon',
      price: 129,
      description: 'Delicious luscious lemon.'
    };
  }

}
