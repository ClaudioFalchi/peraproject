import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

interface CartItem {
  id: number;
  productId: number;
  productName: string;
  productPrice: number;
  productImageUrl: string;
  quantity: number;
  subtotal: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  carrello: CartItem[] = [];
  total: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart() {
    this.cartService.getCart().subscribe((cart) => {
      this.carrello = cart.items;
      this.total = cart.total;
    });
  }

  removeItem(productId: number) {
    this.cartService.removeFromCart(productId).subscribe({
      next: () => {
        this.loadCart();
      },
      error: (err) => {
        // Optionally reload anyway:
        this.loadCart();
      },
    });
  }
}
