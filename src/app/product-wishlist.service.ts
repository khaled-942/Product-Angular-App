import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductWishlistService {
  private productWish = new BehaviorSubject(0);
  productWishObserv = this.productWish.asObservable();
  constructor() { }
  // getwishcounter() {
  //   return this.productWish;
  // }
  updateCounter(newVal: any) {
    this.productWish.next(newVal);
    console.log(newVal)
  }
}
