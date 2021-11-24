import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { NumbersComponent } from './pages/numbers/numbers.component';
import { NoCommondComponent } from './pages/no-commond/no-commond.component';
import { CommondComponent } from './pages/commond/commond.component';
import { SortedComponent } from './pages/sorted/sorted.component';



@NgModule({
  declarations: [
    NumbersComponent,
    NoCommondComponent,
    CommondComponent,
    SortedComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    NumbersComponent,
    NoCommondComponent,
    CommondComponent,
    SortedComponent
  ]
})
export class VentasModule { }
