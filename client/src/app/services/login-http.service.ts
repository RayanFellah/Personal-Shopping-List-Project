import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, of, tap } from 'rxjs';
import { Product, ProductWithId } from '../models/product';
import { SignUp } from '../models/signup';
import { SignIn, SignInWithId } from '../models/signin';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseURL: string = 'http://localhost:3000/api/user';
  isLoggedIn: boolean = false;
  constructor(private http: HttpClient, private router: Router) {}
  
  addUser(user: SignUp) : Observable<Product> {
    return this.http.post<Product>(`${this.baseURL}/signup`, user);
  }

  getUser(user: SignIn)  {
    return this.http.post<string>(`${this.baseURL}/signin`, user);
  }

  login() {
    return of(true).pipe(
      delay(500),
      tap(() => this.isLoggedIn = true)
    )
  }
  logout(path: string) {
    localStorage.clear();
    this.isLoggedIn = false;
    this.router.navigate([path]);
  }
}
