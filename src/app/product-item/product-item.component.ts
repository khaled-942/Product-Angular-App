import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() productItem: any;
  @Output() sendItem = new EventEmitter()
  firstName: string = "khaled"
  quantityCount: number | any

  constructor(private ProductQuantitytService : CartService) { }

  ngOnInit(): void {
    this.ProductQuantitytService.productQuantityObserv.subscribe(data=>{
      this.quantityCount = data
    })
  }
  showDetails() {
    // console.log('from child', this.productItem);
    this.sendItem.emit(this.productItem);
  }
  quantity(){
    this.ProductQuantitytService.updateQuantity(++this.quantityCount)
  }
}
