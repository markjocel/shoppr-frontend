import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GenericReturn } from 'src/app/core/models/generic-return.model';
import { environment } from 'src/environments/environment';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private _http:HttpClient) { }
  
  getProducts(): Observable<GenericReturn<Product[]>> {
    try {
      let products = this._http.get<GenericReturn<Product[]>>(environment.API_BASE_URL + '/products');
      return products;
    } catch (error) {
      console.warn(error)
      throw (error)
    }
  }
  
  getProduct(id:number): Observable<GenericReturn<Product>> {
    try {
      let product = this._http.get<GenericReturn<Product>>(environment.API_BASE_URL + '/products/'+id);
      return product;
    } catch (error) {
      console.warn(error)
      throw (error)
    }
  }
}
