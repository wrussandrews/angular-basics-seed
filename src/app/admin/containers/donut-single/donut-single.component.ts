import {Component, OnInit} from '@angular/core';
import {Donut} from "../../models/donut.model";
import {DonutService} from "../../services/donut.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'donut-single',
  template: `
    <div>
      <donut-form [donut]="donut"
                  [isEdit]="isEdit"
                  (create)="onCreate($event)"
                  (update)="onUpdate($event)"
                  (delete)="onDelete($event)"></donut-form>
    </div>
  `,
  styles: [
  ]
})
export class DonutSingleComponent implements OnInit {

  donut!: Donut;
  isEdit!: boolean;

  onCreate(donut: Donut)
  {
    this.donutService.create(donut).subscribe((donut) => this.router.navigate(['admin', 'donuts', donut.id]));
  }

  onUpdate(donut: Donut)
  {
    this.donutService.update(donut).subscribe({
      next: () => this.router.navigate(['admin']),
      error:(err) =>
        console.log('onUpdate Error', err),
      });
  }

  onDelete(donut: Donut)
  {
    this.donutService.delete(donut).subscribe(() => this.router.navigate(['admin']));
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private donutService: DonutService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.donutService
      .readOne(id)
      .subscribe((donut: Donut) => this.donut = donut);

    this.isEdit = this.route.snapshot.data['isEdit'];
  }

}
