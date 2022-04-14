import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public paymentForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private route: Router) {}

  ngOnInit(): void {
    this.paymentForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      cardNum: ['', [Validators.required]],
    });
  }

  onSubmit() {
    console.log(this.paymentForm.value);
    this.route.navigateByUrl('/success');
  }
  hasRequiredError(key: string) {
    return (
      this.paymentForm.get(key)?.touched &&
      this.paymentForm.get(key)?.hasError('required')
    );
  }
}
