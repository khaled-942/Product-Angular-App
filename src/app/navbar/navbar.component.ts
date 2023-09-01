import { Component, OnInit } from '@angular/core';
import { ProductWishlistService } from '../product-wishlist.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  wishCounter: number | any;
  constructor(private productCounterSer: ProductWishlistService) { }

  ngOnInit(): void {
    this.productCounterSer.productWishObserv.subscribe((value) => (this.wishCounter = value))
  }

}
