import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { ProductsListComponent } from './products-list/products-list.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsListComponent,
  },
  {
    path: 'item/:id',
    component: ProductsDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
