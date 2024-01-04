import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product, ProductWithId } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private newProductAdded$ = new Subject<any>();
  private productRemoved$ = new Subject<any>();
  private updatedProduct$ = new Subject<any>();
  constructor() { }
  emitNewProductAdded(product: Product) {
      this.newProductAdded$.next(product);
  }

  getNewProductAdded() {
    return this.newProductAdded$.asObservable();
  }

  emitProductRemoved(product: ProductWithId) {
    this.productRemoved$.next(product);
  }

  getProductRemoved() {
    return this.productRemoved$.asObservable();
  }

  getUpdatedProduct() {
    return this.updatedProduct$.asObservable();
  }
  
  emitUpdatedProduct(product: ProductWithId) {
    this.updatedProduct$.next(product);
  }

  removeProduct(productsList: ProductWithId[], product: ProductWithId) {
    productsList = productsList.filter((p) => p._id !== product._id);
    return productsList;
  }

  updateProduct(productsList: ProductWithId[], product: ProductWithId) {
    productsList = productsList.map((p) => {
      if (p._id == product._id) {
        return product
      }
      return p;
    })
    return productsList;
  }
}
