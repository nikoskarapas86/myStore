import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem } from '../models/cart-item';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private _cartProductsSubject = new BehaviorSubject<CartItem[]>([]);
  public cartProducts$: Observable<CartItem[]> =
    this._cartProductsSubject.asObservable();

  addToCart(item: CartItem) {
    this._cartProductsSubject.next(
      this._cartProductsSubject.getValue().concat([item])
    );
  }
  removeFromCart(id: number) {
    this._cartProductsSubject.next(
      this._cartProductsSubject
        .getValue()
        .filter((item: CartItem) => item.product.id != id)
    );
  }

  constructor(private http: HttpClient) {}

  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:4200/assets/data.json');
  }
}
