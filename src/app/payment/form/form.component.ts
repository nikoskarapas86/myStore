import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public paymentForm: FormGroup;
  public isNotAnumber: boolean = false;
  @Output() newItemEvent = new EventEmitter<string>();
  constructor(
    private formBuilder: FormBuilder,
    private routeAct: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.paymentForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      cardNum: ['', [Validators.required]],
    });
    this.routeAct.paramMap.subscribe((params) => {
      if (params) {
        this.newItemEvent.emit(params.get('totalPrice')?.toString());
      }
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
  onModelChanged(event: any) {
    // let value = this.paymentForm.get('cardNum').value;

    if (event.length < 6) {
      return;
    }

    event = [...event].filter((c) => c !== ' ').join('');

    const res = [...event]

      .map((c, i) => (i % 4 == 0 ? ' ' + c : c))

      .join('')

      .trim();

    this.paymentForm.get('cardNum').setValue(res);
  }
}
