import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Product, ProductWithId } from '../models/product';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseURL: string = 'http://localhost:3000/api/product';
  private responseSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public response$: Observable<any> = this.responseSubject.asObservable();
  constructor(private http: HttpClient) {}
  
  addProduct(product: Product, userId: string) : Observable<Product> {
    let params = new HttpParams().set('userId', userId);
    return this.http.post<Product>(this.baseURL, product, {params: params});
  }

  getProducts(userId: string)  {
    let params = new HttpParams().set('userId', userId);
    return this.http.get<ProductWithId[]>(this.baseURL, {params: params});
  }

  updateProduct(newProduct: ProductWithId) {
    return this.http.put<ProductWithId>(this.baseURL, newProduct);
  }

  deleteProduct(product: ProductWithId) {
    return this.http.delete<ProductWithId>(`http://localhost:3000/api/product/${product._id}`);
  }
  shareProduct(product: ProductWithId, receiverEmail: string) {
    let params = new HttpParams().set('userEmail', receiverEmail);
    this.http.post<ProductWithId>(`http://localhost:3000/api/product/share`, product, {params: params}).subscribe((res) => {
      this.responseSubject.next(res);
    })
  }
}
