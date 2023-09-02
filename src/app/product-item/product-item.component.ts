import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductWishlistService } from '../product-wishlist.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() productItem: any;
  @Output() sendItem = new EventEmitter();
  firstName: string = 'khaled';
  quantityCount: number | any;
  withCounter: number | any;
  arr?: Array<object>;
  constructor(
    private cartService: CartService,
    private wishCounter: ProductWishlistService
  ) {}

  ngOnInit(): void {
    this.wishCounter.productWishObserv.subscribe(
      (value) => (this.withCounter = value)
    );
  }
  showDetails() {
    // console.log('from child', this.productItem);
    this.sendItem.emit(this.productItem);
  }
  quantity() {
    // this.ProductQuantitytService.addtoCart(++this.quantityCount);
    console.log(this.productItem);
  }
  addToCart(item:any) {
    this.cartService.addtoCart(item)
  }
}
