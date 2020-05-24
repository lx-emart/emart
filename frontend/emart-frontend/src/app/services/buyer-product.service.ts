import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {buyerApiUrl} from '../../environments/environment';
import {Category} from '../models/Category';
import {Manufacturer} from '../models/Manufacturer';
import {Pages} from '../models/Pages';
import {Product} from '../models/Product';
import {Observable, of} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders(
    { 'Content-Type': 'application/json'}
  )
};

@Injectable({
  providedIn: 'root'
})
export class BuyerProductService {

  constructor(private http: HttpClient) { }

  getAllPage(page: number, size: number): Observable<any> {
    const url = `${buyerApiUrl}/api/buyer/product?page=${page}&size=${size}`;
    return this.http.get(url).pipe();
  }

  getDetail(productCode: String): Observable<Product> {
    const url = `${buyerApiUrl}/api/buyer/product/${productCode}`;
    return this.http.get<Product>(url).pipe(
        catchError(_ => {
            console.log("Get Detail Failed");
            return of(new Product());
        })
    );
  }

  getCategorys() {
    return this.http.get<Category[]>(`${buyerApiUrl}/api/buyer/category`);
  }

  getManufacturers() {
    return this.http.get<Manufacturer[]>(`${buyerApiUrl}/api/buyer/manufacturer`);
  }

  search(pages: Pages): Observable<Pages> {
    const url = `${buyerApiUrl}/api/buyer/search`;
    return this.http.post<Pages>(url, pages, httpOptions);
  }
}
