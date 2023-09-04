import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/users.service';
@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {

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
