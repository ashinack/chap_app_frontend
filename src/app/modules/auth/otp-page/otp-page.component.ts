import { Component, ViewChildren } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-otp-page',
  templateUrl: './otp-page.component.html',
  styleUrl: './otp-page.component.scss',
})
export class OtpPageComponent {
  formInput = ['input1', 'input2', 'input3', 'input4'];
  @ViewChildren('formRow') rows: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) {
    this.profileForm = this.toFormGroup(this.formInput);
  }

  profileForm = this.formBuilder.group({
    otp: ['', Validators.required],
  });

  toFormGroup(elements: any) {
    const group: any = {};

    elements.forEach((key: any) => {
      group[key] = new FormControl('', Validators.required);
    });

    return new FormGroup(group);
  }

  onSubmit(data: any) {
    console.log(data);

    this.auth
      .verifyOtp({
        otp: '088102',
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

  /**
   *
   * @param event
   * @param index
   */
  keyUpEvent(event: any, index: any) {
    let pos = index;
    if (event.keyCode === 8 && event.which === 8) {
      pos = index - 1;
    } else {
      pos = index + 1;
    }
    if (pos > -1 && pos < this.formInput.length) {
      this.rows._results[pos].nativeElement.focus();
    }
  }
}
