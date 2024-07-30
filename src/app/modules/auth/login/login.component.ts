import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  profileForm = this.formBuilder.group({
    username: ['', Validators.required, Validators.email],
    password: ['', Validators.required],
  });

  ngOnInit() {}

  onSubmit() {
    console.log('hello');
  }
}
