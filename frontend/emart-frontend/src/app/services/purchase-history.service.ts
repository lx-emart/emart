import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserService} from './user.service';
import {buyerApiUrl} from '../../environments/environment';
import {catchError, map, tap} from 'rxjs/operators';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {PurchaseHistory} from '../models/PurchaseHistory';
import {JwtResponse} from '../response/JwtResponse';

const httpOptions = {
  headers: new HttpHeaders(
    { 'Content-Type': 'application/json'}
  )
};

@Injectable({
  providedIn: 'root'
})
export class PurchaseHistoryService {

  private currentUser: JwtResponse;

  constructor(
    private http: HttpClient,
    private userService: UserService) {
    this.userService.currentUser.subscribe(user => {
      console.log(user);
      this.currentUser = user;
    });
  }

  getAllPage(page: number, size: number): Observable<any> {
    const url = `${buyerApiUrl}/api/buyer/purchaseHistory?page=${page}&size=${size}&userId=${this.currentUser.id}`;
    return this.http.get(url).pipe();
  }

  getDetail(id: any): Observable<any> {
    const url = `${buyerApiUrl}/api/buyer/purchaseHistory/${id}`;
    return this.http.get(url).pipe();
  }

  payment(data: any): Observable<PurchaseHistory> {
    const url = `${buyerApiUrl}/api/buyer/purchaseHistoryAdd`;
    return this.http.post<PurchaseHistory>(url, data, httpOptions);
  }
}
