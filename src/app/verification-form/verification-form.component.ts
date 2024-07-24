import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-verification-form',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './verification-form.component.html',
  styleUrl: './verification-form.component.css'
})
export class VerificationFormComponent implements OnInit {
  verificationForm: FormGroup;
  captchaImage: string;
  captchaInput: string ='';
  captchaSolution: string ='';
  
  

  constructor(private fb: FormBuilder, private router: Router) {
    this.verificationForm = this.fb.group({
      citizenType: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      captcha: ['', Validators.required]
    });

    // this.captchaImage = './assests/images1.png'; 
    this.captchaImage = './assets/IM1.jpeg';
    this.captchaImage = './assets/IM2.jpeg';
    this.captchaImage = './assets/IM3.jpeg';
    this.captchaImage = './assets/IM4.jpeg';// Replace with actual captcha image URL
  }

  ngOnInit(): void {}

  refreshCaptcha(): void {
    // Logic to refresh the captcha image
    this.captchaImage = './assets/images1.png?' + new Date().getTime();
    this.captchaImage = './assets/IM1.jpeg?' + new Date().getTime();
    
     // Example logic
  }

  onSubmit(): void {
    if (this.verificationForm.valid) {
      alert('Form submitted successfully!');
      this.router.navigate(['/otp']);
    } else {
      alert('Please fill all the required fields correctly.');
    }
  }

  get mobile() {
    return this.verificationForm.get('mobile');
  }

  get citizenType() {
    return this.verificationForm.get('citizenType');
  }

  get captcha() {
    return this.verificationForm.get('captcha');
  }
}
