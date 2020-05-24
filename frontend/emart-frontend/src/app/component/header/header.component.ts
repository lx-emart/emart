import {Component, OnInit} from '@angular/core';
import {JwtResponse} from "../../response/JwtResponse";
import {UserService} from "../../services/user.service";
import {Role} from "../../enum/Role";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser: JwtResponse;
  Role = Role;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }

  logout() {
    this.userService.logout();
  }

}
