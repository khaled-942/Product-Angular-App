import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productList: any;
  activeItem: any;
  id: any
  constructor(private activeRouter: ActivatedRoute, private productsServiece: UsersService) { }

  ngOnInit(): void {
    this.activeRouter.params.subscribe((params: any) => {
      this.id = params.id;
      this.productsServiece.getProductsbyId(this.id).subscribe((products) => {
        this.productList = products;
      })
    });
  }

}
