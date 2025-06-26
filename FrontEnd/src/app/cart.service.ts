import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

function getUserIdFromToken(): number | null {
  const token = localStorage.getItem('token');
  if (!token) return null;
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.userId || payload.id || null;
  } catch {
    return null;
  }
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private baseUrl = 'http://localhost:8080/cart';

  constructor(private http: HttpClient) {}

  getCart(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  addToCart(productId: number, quantity: number): Observable<any> {
    return this.http.post(
      `${this.baseUrl}/add`,
      { productId, quantity },
      { responseType: 'text' } // <-- Add this
    );
  }

  updateCart(productId: number, quantity: number): Observable<any> {
    const userId = getUserIdFromToken();
    return this.http.put(`${this.baseUrl}/update/${productId}`, { userId, productId, quantity });
  }

  removeFromCart(productId: number): Observable<any> {
    const userId = getUserIdFromToken();
    return this.http.delete(`${this.baseUrl}/remove/${productId}?userId=${userId}`);
  }
}