import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, delay, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  isLoggedIn = false;

  constructor(private router: Router) { }
  login() {
    return of(true).pipe(
      delay(1000),
      tap(() => this.isLoggedIn = true)
    )
  }
  logout(path: string) {
    localStorage.clear();
    this.isLoggedIn = false;
    this.router.navigate([path]);
  }
}
