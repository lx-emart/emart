import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {UserService} from "../services/user.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private userService: UserService,) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    const currentUser = this.userService.currentUserValue;
    if (currentUser && currentUser.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `${currentUser.email} ${currentUser.username} ${currentUser.token} ${currentUser.roles}`,
          'Content-Type': 'application/json'
        }
      });
    }
    return next.handle(request);
  }
}
