import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, NavbarComponent],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: any;

  constructor(private fb: FormBuilder,  private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  submitForm() {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;
      // Fetch stored credentials from local storage or a service
      const storedUsername = localStorage.getItem('username');
      const storedPassword = localStorage.getItem('password');

      if (loginData.email === storedUsername && loginData.password === storedPassword) {
        alert('Login successful');
        this.router.navigate(['/Home']);
      } else {
        this.errorMessage = 'Invalid username or password';
      }
    }
  }
}
