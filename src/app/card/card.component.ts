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
    this.dataService.removeFromCart(id);
  }
  ngOnInit(): void {
    this.cartProducts$ = this.dataService.cartProducts$;
    this.cartProducts$.subscribe((res) => console.log(res));
  }
}
