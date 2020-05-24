import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {sellerApiUrl} from '../../environments/environment';
import {Product} from '../models/Product';
import {Pages} from '../models/Pages';
import {Category} from '../models/Category';
import {Manufacturer} from '../models/Manufacturer';

const httpOptions = {
  headers: new HttpHeaders(
    { 'Content-Type': 'application/json'}
  )
};

@Injectable({
  providedIn: 'root'
})
export class SellerProductService {

  constructor(private http: HttpClient) { }

  getAllPage(page: number, size: number): Observable<any> {
    const url = `${sellerApiUrl}/api/seller/product?page=${page}&size=${size}`;
    return this.http.get(url).pipe();
  }

  getDetail(productCode: String): Observable<Product> {
    const url = `${sellerApiUrl}/api/seller/product/${productCode}`;
    return this.http.get<Product>(url).pipe(
        catchError(_ => {
            console.log("Get Detail Failed");
            return of(new Product());
        })
    );
  }

  getCategorys() {
    return this.http.get<Category[]>(`${sellerApiUrl}/api/seller/category`);
  }

  getManufacturers() {
    return this.http.get<Manufacturer[]>(`${sellerApiUrl}/api/seller/manufacturer`);
  }

  delelte(productCode: any): Observable<any> {
    const url = `${sellerApiUrl}/api/seller/productDelete/${productCode}`;
    return this.http.delete(url);
  }

  search(pages: Pages): Observable<Pages> {
    const url = `${sellerApiUrl}/api/seller/search`;
    return this.http.post<Pages>(url, pages, httpOptions);
  }

  create(data: any): Observable<any> {
    const url = `${sellerApiUrl}/api/seller/productAdd`;
    return this.http.post<any>(url, data, httpOptions);
  }

  update(data: any): Observable<any> {
    const url = `${sellerApiUrl}/api/seller/productEdit`;
    return this.http.put<any>(url, data, httpOptions);
  }
}
