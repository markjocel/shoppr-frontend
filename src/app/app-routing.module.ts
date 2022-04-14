import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './modules/admin/admin.component';

const routes: Routes = [
  // { 
  //   path: '',
  //   redirectTo: '/admin/checking',
  //   pathMatch: 'full' 
  // },
  {
    path: 'admin',
    component: AdminComponent,
  },
  // { path: '**', redirectTo: '/admin/products' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
