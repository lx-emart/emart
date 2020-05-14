import {Component, OnInit} from '@angular/core';

import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  passwordForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router) {
  }

  ngOnInit(): void {
    this.passwordForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
        confirm_password: ['', [Validators.required]],
      });
  }

  get email(): AbstractControl {
    return this.passwordForm.get('email');
  }

  get password(): AbstractControl {
    return this.passwordForm.get('password');
  }

  get confirm_password(): AbstractControl {
    return this.passwordForm.get('confirm_password');
  }

  hasError = (controlName: string, errorName: string) => {
    return this.passwordForm.controls[controlName].hasError(errorName);
  };

  confirm() {
    this.checkValid(
      this.email,
      this.password,
      this.confirm_password
    );
  }

  checkValid(...field: AbstractControl[]) {
    field.forEach(f => {
      if (f.invalid) {
        f.markAsTouched();
        f.markAsDirty();
        f.updateValueAndValidity();
      }
    });
  }

}
