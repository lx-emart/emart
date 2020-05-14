import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {apiUrl} from '../../environments/environment';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {UserService} from './user.service';
import {JwtResponse} from '../response/JwtResponse';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartUrl = `${apiUrl}/cart`;

  private currentUser: JwtResponse;

  constructor(private http: HttpClient,
              private userService: UserService) {
  }
}
