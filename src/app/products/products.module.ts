import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsItemComponent } from './products-item/products-item.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';


@NgModule({
  declarations: [
    ProductsListComponent,
    ProductsItemComponent,
    ProductsDetailsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  exports: [
    ProductsListComponent,
    ProductsItemComponent,
    ProductsDetailsComponent,
  ]
})
export class ProductsModule { }
