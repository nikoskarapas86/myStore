import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalContentComponent } from '../modal-content/modal-content.component';
import { CartItem } from '../models/cart-item';
import { Product } from '../models/product';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product = new Product();
  public selectValues: number[] = [1, 2, 3, 4, 5];
  public productForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      numOfProduct: ['', [Validators.required]],
    });
  }
  onSubmit() {
    const cartItem: CartItem = {
      numOfProduct: this.productForm?.get('numOfProduct')?.value,
      product: this.product,
    };

    this.dataService.addToCart(cartItem);
    this.dialog.open(ModalContentComponent);
  }
}
