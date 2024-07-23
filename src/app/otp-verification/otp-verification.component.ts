import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports:[ReactiveFormsModule, CommonModule,FormsModule],
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.css']
})
export class OtpVerificationComponent implements OnInit {
  otp: string[] = ['', '', '', ''];
  generatedOtp: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.generateOtp();
  }

  generateOtp() {
    this.generatedOtp = Math.floor(1000 + Math.random() * 9000).toString();
    alert(`Your OTP is: ${this.generatedOtp}`);
  }

  moveFocus(event: KeyboardEvent, index: number) {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    if (value.length >= 1 && index < this.otp.length - 1) {
      const nextInput = input.nextElementSibling as HTMLInputElement;
      if (nextInput) {
        nextInput.focus();
      }
    }

    if (event.key === 'Backspace' && index > 0) {
      const prevInput = input.previousElementSibling as HTMLInputElement;
      if (prevInput) {
        prevInput.focus();
      }
    }
  }

  onSubmit() {
    const otpCode = this.otp.join('');
    if (otpCode.length !== 4) {
      this.errorMessage = 'Please enter a valid 4-digit OTP.';
      this.successMessage = '';
      return;
    }

    if (otpCode === this.generatedOtp) {
      this.successMessage = 'OTP verified successfully! Your phone number is verified.';
      this.errorMessage = '';
      // Navigate to login
      this.router.navigate(['/registration']);
    } else {
      this.errorMessage = 'Invalid OTP. Please try again.';
      this.successMessage = '';
    }
  }
}
