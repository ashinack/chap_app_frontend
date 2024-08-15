import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss',
})
export class RegisterPageComponent {
  hide = true;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) {}

  profileForm = this.formBuilder.group(
    {
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      mobileNO: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(
            '(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))s*[)]?[-s.]?[(]?[0-9]{1,3}[)]?([-s.]?[0-9]{3})([-s.]?[0-9]{3,4})'
          ),
        ]),
      ],
      password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(
            '^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\\d!@#$%^&*]{8,}$'
          ),
        ]),
      ],
      confirmPassword: ['', Validators.required],
    },
    {
      validator: this.ConfirmPasswordValidator('password', 'confirmPassword'),
    }
  );
  isActive = true;

  ConfirmPasswordValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      let control = formGroup.controls[controlName];
      let matchingControl = formGroup.controls[matchingControlName];
      if (
        matchingControl.errors &&
        !matchingControl.errors['confirmPasswordValidator']
      ) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmPasswordValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  getPasswordError(): string | null {
    const password = this.profileForm.get('password')?.value;

    if (!password?.match('^(?=.*[A-Z])')) {
      return 'At least one uppercase letter';
    }

    if (!password?.match('(?=.*[!@#$%^&*])')) {
      return 'At least one special character';
    }
    if (!password?.match('(.*[0-9].*)')) {
      return 'At least one number';
    }
    if (!password?.match('(?=.*[a-z])')) {
      return 'At least one lower case';
    }
    if (!password?.match('.{8,}')) {
      return 'Minium character 8';
    }

    // Add more checks as needed

    return null; // No errors, all validations passed
  }

  onSubmit(user: any) {
    this.auth
      .registerUser({
        name: user.name,
        email: user.email,
        mobile: user.mobileNO,
        password: user.password,
      })
      .subscribe(
        (data) => {
          console.log(data, 'data');
          this.router.navigate(['/auth/otp']);
        },
        (error) => {
          console.log(error, 'erro');
        }
      );
  }
}
