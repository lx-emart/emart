import {Component, OnInit} from '@angular/core';

import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.signupForm = this.fb.group(
      {
        username: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
        confirm_password: ['', [Validators.required]],
        mobile_number: ['', [Validators.required]],
        contact_number: ['', [Validators.required]],
        company_name: ['', [Validators.required]],
        mentor: ['']
      });
  }

  get username(): AbstractControl {
    return this.signupForm.get('username');
  }

  get email(): AbstractControl {
    return this.signupForm.get('email');
  }

  get password(): AbstractControl {
    return this.signupForm.get('password');
  }

  get confirm_password(): AbstractControl {
    return this.signupForm.get('confirm_password');
  }

  get buyer(): AbstractControl {
    return this.signupForm.get('buyer');
  }

  get seller(): AbstractControl {
    return this.signupForm.get('seller');
  }

  get mobile_number(): AbstractControl {
    return this.signupForm.get('mobile_number');
  }

  get contact_number(): AbstractControl {
    return this.signupForm.get('contact_number');
  }

  get company_name(): AbstractControl {
    return this.signupForm.get('company_name');
  }

  get brief_about_company(): AbstractControl {
    return this.signupForm.get('brief_about_company');
  }

  get postal_address(): AbstractControl {
    return this.signupForm.get('postal_address');
  }

  get mentor(): AbstractControl {
    return this.signupForm.get('mentor');
  }

  hasError = (controlName: string, errorName: string) => {
    return this.signupForm.controls[controlName].hasError(errorName);
  };

  signup() {
    this.checkValid(
      this.username,
      this.email,
      this.password,
      this.confirm_password,
      this.mobile_number,
      this.contact_number,
      this.company_name
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
