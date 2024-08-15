import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-otp-page',
  templateUrl: './otp-page.component.html',
  styleUrl: './otp-page.component.scss',
})
export class OtpPageComponent {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) {}

  profileForm = this.formBuilder.group({
    otp: ['', Validators.required],
  });

  onSubmit(data: any) {
    this.auth
      .verifyOtp({
        otp: data.otp,
      })
      .subscribe(
        (data) => {
          console.log(data, 'data');
        },
        (error) => {
          console.log(error, 'erro');
        }
      );
  }
}
