import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '../models/cart-item';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  cartProducts$: Observable<CartItem[]>;

  constructor(private dataService: DataService) {}
  removeCart(id: number): void {
    // const cartIdx = this.cartProducts? this.cartProducts.findIndex(cart => cart.id === id): -1;
    // if(cartIdx != -1 && this.cartProducts.length > 0){
    //   this.cartProducts.splice(cartIdx,1)
    //   this.productService.addToCart(this.cartProducts)
    //   this.calculateTotalPrice()
    // }
  }
  ngOnInit(): void {
    this.cartProducts$ = this.dataService.cartProducts$;
    this.cartProducts$.subscribe((res) => console.log(res));
  }
}
