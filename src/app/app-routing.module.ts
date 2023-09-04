import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
// import { ProductItemComponent } from './product-item/product-item.component';
// import { ProductDetailsComponent } from './product-details/product-details.component';
// import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { AuthDGuard } from './auth-d.guard';
import { LoginComponent } from './auth-module/login/login.component';
import { SignUpComponent } from './auth-module/sign-up/sign-up.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductsDetailsComponent } from './products/products-details/products-details.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignUpComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [AuthDGuard],
    canDeactivate: [AuthDGuard],
  },
  {
    path: 'store',
    // component:ProductsListComponent
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsModule),
  },
  // {
  //   path: 'item/:id',
  //   component: ProductsDetailsComponent,
  // },
  {
    path: '**',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
