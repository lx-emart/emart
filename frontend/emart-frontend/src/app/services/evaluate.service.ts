import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {buyerApiUrl} from '../../environments/environment';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {Evaluate} from '../models/Evaluate';
import {JwtResponse} from '../response/JwtResponse';

const httpOptions = {
  headers: new HttpHeaders(
    { 'Content-Type': 'application/json'}
  )
};

@Injectable({
  providedIn: 'root'
})
export class EvaluateService {

  private currentUser: JwtResponse;

  constructor(private http: HttpClient) {
  }

  addEvaluate(evaluate: any): Observable<any> {
    const url = `${buyerApiUrl}/api/buyer/addEvaluate`;
    return this.http.post<any>(url, evaluate, httpOptions);
  }

  payment(data: any): Observable<any> {
    const url = `${buyerApiUrl}/api/buyer/purchaseHistoryAdd`;
    return this.http.post<any>(url, data, httpOptions);
  }
}
