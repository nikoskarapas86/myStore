import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  totalPrice: number = 0;
  constructor(private dataService: DataService, private route: Router) {}
  removeCart(id: number): void {
    this.dataService.removeFromCart(id);
    this.calculateTotalPrice();
  }
  ngOnInit(): void {
    this.cartProducts$ = this.dataService.cartProducts$;
    this.calculateTotalPrice();
  }
  calculateTotalPrice(): void {
    this.cartProducts$.subscribe((items: CartItem[]) => {
      this.totalPrice =
        items &&
        items
          .map((item) => item.numOfProduct * item.product.price)
          .reduce((total: number, price: number) => (total += price), 0);
      !this.totalPrice && this.route.navigateByUrl('/products');
    });
  }
  pay() {
    this.route.navigateByUrl('/payment');
  }
}
