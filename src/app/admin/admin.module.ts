import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

//Containers

import { DonutListComponent } from './containers/donut-list/donut-list.component';
import { DonutSingleComponent } from './containers/donut-single/donut-single.component';

//Components

import { DonutCardComponent } from './components/donut-card/donut-card.component';
import { DonutFormComponent } from './components/donut-form/donut-form.component';
import {FormsModule} from "@angular/forms";


export const routes: Routes = [
    { path: "donuts", component: DonutListComponent},
    { path: 'donuts/new', component: DonutSingleComponent, data: { isEdit: false } },
    { path: 'donuts/:id', component: DonutSingleComponent, data: { isEdit: true }},
    { path: '', pathMatch: 'full', redirectTo: 'donuts' },
  ]

@NgModule({
  declarations: [
    DonutListComponent,
    DonutSingleComponent,
    DonutCardComponent,
    DonutFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [ ]
})
export class AdminModule { }
