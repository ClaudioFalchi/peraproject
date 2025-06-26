import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router) {}

  get isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  get userName(): string | null {
    const token = localStorage.getItem('token');
    if (!token) return null;
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      // Sostituisci 'name' con il campo corretto se diverso
      return payload.name || payload.sub || payload.email || null;
    } catch {
      return null;
    }
  }

  logout() {
    localStorage.removeItem('token');
    // Forza il refresh della navbar (puoi anche usare un servizio di Auth per notificare)
    this.router.navigate(['/login']);
  }
}
