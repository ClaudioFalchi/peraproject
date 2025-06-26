import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080'; // modifica se il backend è su un'altra porta

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private registerUrl = 'http://localhost:8080/auth/register';
  private loginUrl = 'http://localhost:8080/auth/login';

  constructor(private http: HttpClient) {}

  login(data: { email: string, password: string }): Observable<any> {
    return this.http.post(`http://localhost:8080/auth/login`, data);
  }

  register(data: { name: string, email: string, password: string }): Observable<any> {
    return this.http.post('http://localhost:8080/auth/register', data);
  }
}