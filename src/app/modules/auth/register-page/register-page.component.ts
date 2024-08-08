import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss',
})
export class RegisterPageComponent {
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  profileForm = this.formBuilder.group({
    username: ['', Validators.required, Validators.email],
    password: ['', Validators.required],
  });
}
