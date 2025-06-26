import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { HttpClient } from '@angular/common/http';

interface Product {
  imageUrl: string;
  name: string; // <-- Cambia qui se il backend restituisce "name"
  description: string;
  price: number;
  orderQty: number;
  id: number;
}

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products: Product[] = [];

  constructor(private cartService: CartService, private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Product[]>('http://localhost:8080/products/getAll').subscribe({
      next: (data) => {
        console.log(data[0]); // Controlla che productName sia presente
        this.products = data.map(p => ({ ...p, orderQty: 1 }));
      },
      error: () => {
        alert('Errore nel caricamento dei prodotti.');
      }
    });
  }

  onBuy(product: Product) {
    if (product.orderQty > 0) {
      this.cartService.addToCart(product.id, product.orderQty).subscribe({
        next: () => {
          alert(`Hai aggiunto ${product.orderQty} di ${product.name} al carrello!`);
        },
        error: (err) => {
          if (err.status === 409) {
            this.cartService.updateCart(product.id, product.orderQty).subscribe(() => {
              alert(`Quantità aggiornata per ${product.name} nel carrello!`);
            });
          } else {
            alert('Errore durante l\'aggiunta al carrello.');
          }
        }
      });
    } else {
      alert('Inserisci una quantità valida');
    }
  }
}