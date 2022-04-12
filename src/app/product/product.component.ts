import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product = new Product();
  public selectValues: number[] = [1, 2, 3, 4, 5];
  constructor() {}

  ngOnInit(): void {}
  onSubmit(product: Product, $event: any) {}
}
