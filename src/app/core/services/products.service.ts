import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../modules/admin/models/product.model'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products = new BehaviorSubject<Product[] | undefined>(undefined);

  constructor() { }

  setProducts(products: Product[]) {
    this.products.next(products);
  }

  getProducts() {
    return this.products.asObservable();
  }
}
