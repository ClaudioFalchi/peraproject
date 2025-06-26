import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class OrderService {
  private baseUrl = 'http://localhost:8080/checkout';

  constructor(private http: HttpClient) {}

  checkout(order: { orderId: number, orderDate: string, total: number, message: string }): Observable<any> {
    return this.http.post(this.baseUrl, order);
  }
}