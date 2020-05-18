import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {apiUrl} from '../../environments/environment';
import {catchError, tap} from 'rxjs/operators';
import {User} from "../models/User";
import {JwtResponse} from '../response/JwtResponse';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders(
    { 'Content-Type': 'application/json'}
  )
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUserSubject: BehaviorSubject<JwtResponse>;

  // JWT init
  constructor(private http: HttpClient) {
    const data = localStorage.getItem('current_user');
    this.currentUserSubject = new BehaviorSubject<JwtResponse>(JSON.parse(data));
  }

  // get jwt data
  get currentUserValue() {
    return this.currentUserSubject.value;
  }

  // sign in
  login(data): Observable<JwtResponse> {
    const url = `${apiUrl}/api/login`;
    return this.http.post<JwtResponse>(url, data, httpOptions)
    .pipe(tap(datasponse => {
        if (data.token) {
          localStorage.setItem('current_user', JSON.stringify(data));
          return data;
        }
      }),
      catchError(this.handleError('Login Failed', null))
    );
  }

  // logout
  // logout() {
  //     localStorage.clear();
  // }

  // sign up
  signUp(user: User): Observable<User> {
    const url = `${apiUrl}/api/signup`;
    return this.http.post<User>(url, user);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.log(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
