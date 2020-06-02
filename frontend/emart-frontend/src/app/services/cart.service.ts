import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserService} from './user.service';
import {buyerApiUrl} from '../../environments/environment';
import {catchError, map, tap} from 'rxjs/operators';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {Cart} from '../models/Cart';
import {JwtResponse} from '../response/JwtResponse';

const httpOptions = {
  headers: new HttpHeaders(
    { 'Content-Type': 'application/json'}
  )
};

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private currentUser: JwtResponse;

  constructor(
    private http: HttpClient,
    private userService: UserService) {
    this.userService.currentUser.subscribe(user => {
      console.log(user);
      this.currentUser = user;
    });
  }

  getCart(): Observable<Cart> {
    const url = `${buyerApiUrl}/api/buyer/cart`;
    return this.http.get<Cart>(url).pipe();
  }

  addCart(cart: any, count: number): Observable<Cart> {
    const url = `${buyerApiUrl}/api/buyer/addCart`;
    return this.http.post<Cart>(url, new Cart(cart, count, this.currentUser.id), httpOptions);
  }

  remove(cart: Cart) {
    const url = `${buyerApiUrl}/api/buyer/deleteCart/${cart.productCode}`;
    return this.http.delete(url).pipe();
  }

  delete() {
    const url = `${buyerApiUrl}/api/buyer/deleteUserId/${this.currentUser.id}`;
    return this.http.delete(url).pipe();
  }
}
