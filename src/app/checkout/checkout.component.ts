import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkoutForm!: FormGroup;
  totalPrice: number = 49.90; // <-- Inserisci il prezzo totale corretto

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.checkoutForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      cognome: ['', [Validators.required, Validators.minLength(2)]],
      indirizzo: ['', [Validators.required]],
      citta: ['', [Validators.required]],
      cap: ['', [Validators.required, Validators.pattern(/^\d{5}$/)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern(/^\d{6,15}$/)]],

      numeroCarta: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
      nomeCarta: ['', [Validators.required]],
      scadenza: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]],
      cvv: ['', [Validators.required, Validators.pattern(/^\d{3,4}$/)]]
    });
  }

  get f() {
    return this.checkoutForm.controls;
  }

  onSubmit(): void {
    if (this.checkoutForm.invalid) {
      this.checkoutForm.markAllAsTouched();
      return;
    }

    console.log('Dati inviati:', this.checkoutForm.value);

    // Simula un salvataggio, poi reindirizza alla pagina di conferma
    this.router.navigate(['/conferma-ordine']);
  }
}
