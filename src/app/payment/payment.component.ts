import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  constructor(private cdref: ChangeDetectorRef) {}
  public totalPrice: string = '';
  ngOnInit(): void {
    console.log(this.totalPrice);
  }
  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }
  addEvent(price: string) {
    this.totalPrice = price.toString();
  }
}
