import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html'
})
export class CheckoutComponent {
  checkoutForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    address: ['', Validators.required],
    city: ['', Validators.required],
    zip: ['', Validators.required],
    card: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]]
  });

  submitted = false;

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    this.submitted = true;
    if (this.checkoutForm.valid) {
      // Qui puoi gestire l'invio dei dati
      alert('Ordine inviato!');
    }
  }
}