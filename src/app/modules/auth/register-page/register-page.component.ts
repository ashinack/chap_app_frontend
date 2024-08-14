import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss',
})
export class RegisterPageComponent {
  showPassword = false;
  constructor(private formBuilder: FormBuilder, private router: Router) {
    console.log(this.showPassword, 'show--');
  }

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

  showPasswordBtn() {
    this.showPassword = true;
  }
}
