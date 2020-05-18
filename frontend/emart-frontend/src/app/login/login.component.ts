import {Component, OnInit} from '@angular/core';

import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {UserService} from '../services/user.service';
import {Role} from "../enum/Role";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  returnUrl: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group(
      {
        username: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]]
      });
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  get username(): AbstractControl {
    return this.loginForm.get('username');
  }

  get password(): AbstractControl {
    return this.loginForm.get('password');
  }

  hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
  }

  login() {
    if (!this.checkValid(this.username) || !this.checkValid(this.password)) {
      return;
    }

    const data: any = {
      username: this.username.value,
      password: this.password.value
    };

    this.userService.login(data)
      .subscribe(user => {
          console.log(JSON.stringify(user));
          if (user) {
            //const info: any = user;
            if (user.roles == Role.SELLER) {
              this.returnUrl = '/seller-product-list';
            } else if (user.roles == Role.BUYER) {
              this.returnUrl = '/buyer-product-list';
            }
            this.router.navigate([this.returnUrl]);
          }
        }
      );
  }

  checkValid(field): boolean {
    if (field.invalid) {
      field.markAsTouched();
      field.markAsDirty();
      field.updateValueAndValidity();
      return false;
    }
    return true;
  }

}
