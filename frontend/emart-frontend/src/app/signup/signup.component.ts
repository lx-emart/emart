import {Component, OnInit} from '@angular/core';

import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {User} from '../models/User';
import {UserService} from '../services/user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.signupForm = this.fb.group(
      {
        username: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]],
        mobileNumber: ['', [Validators.required]],
        contactNumber: ['', [Validators.required]],
        companyName: ['', [Validators.required]],
        briefAboutCompany: ['', []],
        postalAddress: ['', []],
        optionsRadios:  ['', []],
        buyer:  ['', []],
        seller:  ['', []]
      });
    this.signupForm.patchValue({optionsRadios: '1'});
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

  get confirmPassword(): AbstractControl {
    return this.signupForm.get('confirmPassword');
  }

  get buyer(): AbstractControl {
    return this.signupForm.get('buyer');
  }

  get seller(): AbstractControl {
    return this.signupForm.get('seller');
  }

  get optionsRadios(): AbstractControl {
    return this.signupForm.get('optionsRadios');
  }

  get mobileNumber(): AbstractControl {
    return this.signupForm.get('mobileNumber');
  }

  get contactNumber(): AbstractControl {
    return this.signupForm.get('contactNumber');
  }

  get companyName(): AbstractControl {
    return this.signupForm.get('companyName');
  }

  get briefAboutCompany(): AbstractControl {
    return this.signupForm.get('briefAboutCompany');
  }

  get postalAddress(): AbstractControl {
    return this.signupForm.get('postalAddress');
  }

  hasError = (controlName: string, errorName: string) => {
    return this.signupForm.controls[controlName].hasError(errorName);
  }

  signup() {
    this.checkValid(
      this.username,
      this.email,
      this.password,
      this.confirmPassword,
      this.mobileNumber,
      this.contactNumber,
      this.companyName
    );
    
    const user: User = {
      username: this.username.value,
      email: this.email.value,
      roles: this.optionsRadios.value,
      password: this.password.value,
      confirmPassword: this.confirmPassword.value,
      mobileNumber: this.mobileNumber.value,
      contactNumber: this.contactNumber.value,
      companyName: this.companyName.value,
      briefAboutCompany: this.briefAboutCompany.value,
      postalAddress: this.postalAddress.value
    };

    this.userService.signUp(user).subscribe(data => {
        this.router.navigate(['login']);
    },
    error => {
      console.log(error); // log to console instead
    });

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
