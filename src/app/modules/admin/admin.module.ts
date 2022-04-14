import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { RouterModule } from '@angular/router';
import { ProductModalComponent } from './components/product-modal/product-modal.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminComponent } from './admin.component';
import { UpdateProductComponent } from './pages/update-product/update-product.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';


@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductModalComponent,
    AdminComponent,
    UpdateProductComponent,
    ProductFormComponent,
    SideBarComponent,
    HeaderComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    NgxSkeletonLoaderModule
  ]
})
export class AdminModule { }
