import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
userData: any;
onSubmit() {
throw new Error('Method not implemented.');
}
  registerForm: FormGroup;
  submitted = false;
  successMessage = '';
  errorMessage = '';
  email = '';
  password = '';
  nome = '';
  authService: AuthService;

  constructor(private fb: FormBuilder, http: HttpClient) {
    this.registerForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confermaPassword: ['', Validators.required] 
    }, { validators: this.passwordMatchValidator });
    this.authService = new AuthService(http);
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
    this.authService.register({name: this.nome, email: this.email, password: this.password })
      .subscribe({
        next: (res:any) => {
          console.log('register riuscito:', res);
          localStorage.setItem('token', res.token); // Salva il JWT per usi futuri
        },
        
      });
  }

}
