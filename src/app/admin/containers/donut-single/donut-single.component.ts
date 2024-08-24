import {Component, OnInit} from '@angular/core';
import {Donut} from "../../models/donut.model";
import {DonutService} from "../../services/donut.service";

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

  constructor(private donutService: DonutService) {}

  ngOnInit(): void {
    this.donut = this.donutService.readOne('55555');
  }
}
