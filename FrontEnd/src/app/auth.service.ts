import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private registerUrl = 'http://localhost:8080/auth/register';
  private loginUrl = 'http://localhost:8080/auth/login';

  constructor(private http: HttpClient) { }

  // Metodo esistente per la registrazione
  register(userData: { name: string, email: string, password: string }): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.registerUrl, userData, { headers });
  }

  // Nuovo metodo per il login
  login(credentials: { email: string, password: string }): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.loginUrl, credentials, { headers });
  }

  get userName(): string | null {
    const token = localStorage.getItem('token');
    if (!token) return null;
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      // Usa solo il campo 'name' (o quello che contiene il nome utente)
      return payload.name || null;
    } catch {
      return null;
    }
  }
}