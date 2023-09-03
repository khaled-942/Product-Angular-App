import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CartComponent } from './cart/cart.component';

@Injectable({
  providedIn: 'root'
})
export class AuthDGuard implements CanActivate, CanDeactivate<unknown> {
  isLogin = true;
  out = true;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.isLogin) {

      return true;
    }
    else {
      alert('you must login')
      return false;
    }
  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.out) {

      return true;
    }
    else {
      alert('are you sure')
      return false;
    }
  }

}
