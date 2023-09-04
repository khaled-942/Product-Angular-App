import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductWishlistService } from 'src/app/product-wishlist.service';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
// @ViewChild(ProductItemComponent) child1: any
productList:any
constructor(private route: Router,private productsServiece:UsersService ) { }

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
