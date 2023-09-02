import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private productQuantity = new BehaviorSubject(1);
  productQuantityObserv = this.productQuantity.asObservable();
  constructor() { }

  updateQuantity(newVal: any) {
    this.productQuantity.next(newVal);
    console.log('productQuantity',newVal)
  }
}
