import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {apiUrl} from '../../environments/environment';
import {sellerApiUrl} from '../../environments/environment';
import {Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getAllPage(page: number, size: number): Observable<any> {
    const url = `${sellerApiUrl}/api/seller/product?page=${page}&size=${size}`;
    return this.http.get(url)
        .pipe();
  }
}
