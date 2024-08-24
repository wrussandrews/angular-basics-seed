import {Component, OnInit} from '@angular/core';
import {Donut} from "../../models/donut.model";
import {DonutService} from "../../services/donut.service";

@Component({
  selector: 'donut-single',
  template: `
    <div>
      <donut-form [donut]="donut" (create)="onCreate($event)"
                  (update)="onUpdate($event)" (delete)="onDelete($event)"></donut-form>
    </div>
  `,
  styles: [
  ]
})
export class DonutSingleComponent implements OnInit {

  donut!: Donut;

  onCreate(donut: Donut)
  {
    this.donutService.create(donut).subscribe(() => console.log("Successfully created"));
  }

  onUpdate(donut: Donut)
  {
    this.donutService.update(donut).subscribe(() => console.log("Successfully updated"));
  }

  onDelete(donut: Donut)
  {
    this.donutService.delete(donut);
  }

  constructor(private donutService: DonutService) {}

  ngOnInit(): void {
    this.donutService
      .readOne('4444')
      .subscribe((donut: Donut) => this.donut = donut);
  }
}
