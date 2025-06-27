import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  submitted = false;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.registerForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confermaPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  get f() {
    return this.registerForm.controls;
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confermaPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  onRegister() {
    this.submitted = true;
    this.successMessage = '';
    this.errorMessage = '';

    if (this.registerForm.invalid) {
      return;
    }

    const userData = {
      name: this.registerForm.value.nome,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password
    };

    this.authService.register(userData).subscribe(
      response => {
        this.successMessage = 'Registrazione avvenuta con successo!';
        this.errorMessage = '';
        this.registerForm.reset();
        this.submitted = false;
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 1500); // attende 1.5 secondi prima di reindirizzare
      },
      error => {
        this.errorMessage = error.error?.message || 'Errore durante la registrazione.';
        this.successMessage = '';
      }
    );
  }
}
