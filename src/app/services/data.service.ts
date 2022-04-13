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
  addToCart(item: CartItem) {
    console.log(item);
    this._cartProductsSubject.next(
      this._cartProductsSubject.getValue().concat([item])
    );
    console.log(this._cartProductsSubject);
  }
  public cartProducts$: Observable<CartItem[]> =
    this._cartProductsSubject.asObservable();
  constructor(private http: HttpClient) {}

  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:4200/assets/data.json');
  }
}
