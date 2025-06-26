import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService } from '../order.service';
import { CartService } from '../cart.service'; // importa il servizio carrello

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkoutForm!: FormGroup;
  totalPrice: number = 0; // inizializza a 0

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private orderService: OrderService,
    private cartService: CartService // aggiungi qui
  ) {}

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

    // Recupera il totale reale dal carrello
    this.cartService.getCart().subscribe({
      next: (cart) => {
        this.totalPrice = cart.total || 0;
      },
      error: () => {
        this.totalPrice = 0;
      }
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

    // Prepara i dati dell'ordine
    const order = {
      orderId: 0, // Il backend genererà l'id
      orderDate: new Date().toISOString(),
      total: this.totalPrice,
      message: 'Ordine effettuato dal checkout'
    };

    this.orderService.checkout(order).subscribe({
      next: () => {
        this.router.navigate(['/conferma-ordine']);
      },
      error: () => {
        alert('Errore durante il checkout.');
      }
    });
  }
}
