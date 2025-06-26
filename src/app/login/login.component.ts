
import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
  

export class LoginComponent {
  email = '';
  password = '';
  loginForm: FormGroup;
  submitted = false;
  errorMessage: string = '';
  authService: any;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() {
    return this.loginForm.controls;
  }
  onLogin() {
    this.authService.login({ email: this.email, password: this.password })
      .subscribe({
        next: (res: { token: string; }) => {
          console.log('Login riuscito:', res);
          localStorage.setItem('token', res.token); // Salva il JWT per usi futuri
        },
        error: (err: any) => {
          console.error('Errore di login:', err);
        }
      });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.loginForm.invalid) return;

    const { email, password } = this.loginForm.value;

    // Simula autenticazione
    if (email === 'test@email.com' && password === 'password123') {
      alert('Login avvenuto con successo!');
    } else {
      this.errorMessage = 'Credenziali non valide';
    }
  }
}