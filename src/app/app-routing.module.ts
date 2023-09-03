import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { AuthDGuard } from './auth-d.guard';

const routes: Routes = [
  {
    path: '', component: ProductListComponent
  },
  {
    path: 'details', component: ProductDetailsComponent
  },
  {
    path: 'login', component: LogInComponent
  },
  {
    path: 'signup', component: SignUpComponent
  },
  {
    path: 'cart', component: CartComponent,
    canActivate: [AuthDGuard],
    canDeactivate:[AuthDGuard]
  },
  {
    path: 'item/:id', component: ProductDetailsComponent
  },
  {
    path: '**', component: ProductItemComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
