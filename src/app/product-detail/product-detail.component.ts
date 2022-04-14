import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalContentComponent } from '../modal-content/modal-content.component';
import { CartItem } from '../models/cart-item';
import { Product } from '../models/product';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  public prodId: number;
  public product: Product;
  public productDetailForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}
  public selectValues: number[] = [1, 2, 3, 4, 5];
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      if (params) {
        this.prodId = Number(params.get('id'));
        this.getProduct();
      }
    });
    this.productDetailForm = this.formBuilder.group({
      numOfProduct: ['', [Validators.required]],
    });
  }

  getProduct() {
    this.dataService.getProduct().subscribe((products: Product[]) => {
      this.product = products?.find(
        (prod) => prod.id === this.prodId
      ) as Product;
    });
  }
  onSubmit() {
    const cartItem: CartItem = {
      numOfProduct: this.productDetailForm?.get('numOfProduct')?.value,
      product: this.product,
    };

    this.dataService.addToCart(cartItem);
    this.dialog
      .open(ModalContentComponent, {
        data: 'product added succesfully',
      })
      .afterClosed()
      .subscribe((_) => this.router.navigateByUrl('/products'));
  }
  hasRequiredError(key: string) {
    return (
      this.productDetailForm.get(key)?.touched &&
      this.productDetailForm.get(key)?.hasError('required')
    );
  }
}
