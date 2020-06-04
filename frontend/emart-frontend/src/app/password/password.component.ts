import {Component, OnInit} from '@angular/core';

import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {User} from '../models/User';
import {ErrorCode} from '../enum/ErrorCode';
import {Error} from '../models/Error';



@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit{

  constructor(
    private router: Router,
    private userService: UserService) {
  }

  error: Error;
  user: User;

  ngOnInit(): void {
    this.user = new User();
  }

  clear(){
    this.error = new Error();
  }

  onSubmit() {

    if (this.user.password != this.user.confirmPassword) {
      const data: any = {
        errorCode: "400002",
        errorMsg: "The passwords are inconsistent, please try again"
      };
      this.error = data;
      return;
    }

    this.userService.password(this.user).subscribe(data => {
        console.log(JSON.stringify(data));
        const info: any = data;
        if (info.errorCode == ErrorCode.CODE_400001) {
          this.error = info;
        } else {
          this.router.navigate(['login']);
        }
    },
    e => {
      console.log(e); // log to console instead
    });
  }

}
