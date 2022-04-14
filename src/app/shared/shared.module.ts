import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomSelectComponent } from './components/custom-select/custom-select.component';
import { CustomTableComponent } from './components/custom-table/custom-table.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';



@NgModule({
  declarations: [
    CustomSelectComponent,
    CustomTableComponent
  ],
  imports: [
    CommonModule,
    NgxSkeletonLoaderModule
  ],
  exports: [
    CustomSelectComponent,
    CustomTableComponent
  ]
})
export class SharedModule { }
