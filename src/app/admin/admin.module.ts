import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Containers

import { DonutListComponent } from './containers/donut-list/donut-list.component';
import { DonutSingleComponent } from './containers/donut-single/donut-single.component';

//Components

import { DonutCardComponent } from './components/donut-card/donut-card.component';
import { DonutFormComponent } from './components/donut-form/donut-form.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    DonutListComponent,
    DonutSingleComponent,
    DonutCardComponent,
    DonutFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DonutListComponent, DonutSingleComponent
  ]
})
export class AdminModule { }
