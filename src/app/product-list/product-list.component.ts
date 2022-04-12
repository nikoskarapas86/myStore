import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  public productList$: Observable<Product[]> = new Observable<Product[]>();
  constructor(private dataService: DataService) {
    this.productList$ = this.dataService.getProduct();
  }

  ngOnInit(): void {}
}
