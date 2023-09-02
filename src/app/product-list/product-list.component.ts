import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductWishlistService } from '../product-wishlist.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  // @ViewChild(ProductItemComponent) child1: any
  productList:any
  constructor(private route: Router, private productCounterService: ProductWishlistService,private productsServiece:UsersService ) { }

  reciveItemDate(productItem: any) {
    console.log('from Parent', productItem);
    this.route.navigate([`item/${productItem.id}`])
  }
  ngOnInit(): void {
    this.productsServiece.getProductsList().subscribe((products) => (this.productList = products));
  }
  ngAfterViewInit() {
    // console.log('by view child', this.child1.firstName)
  }
}
