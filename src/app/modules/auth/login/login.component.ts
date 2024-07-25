import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  // formGroup!: FormGroup;

  // profileForm = new FormGroup({
  //   username: new FormControl(''),
  //   password: new FormControl(''),
  // });
  constructor(private formBuilder: FormBuilder) {}

  profileForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: [''],
  });

  ngOnInit() {
    // ...
    console.log('oninitd cal');
  }

  onSubmit() {
    console.log('hello');

    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  btnClicked() {
    console.log('pppp');
  }
}
