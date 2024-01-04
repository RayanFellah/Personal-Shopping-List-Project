import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChildFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SignIn } from 'src/app/models/signin';
import { SignUp } from 'src/app/models/signup';
import { LoginService } from 'src/app/services/login-http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hidePassword: boolean = true;
  signInObj: SignIn = {
    email: '',
    password: '',
  }
  constructor(private readonly loginService: LoginService, private readonly router: Router) {}

  onSignIn() {
    this.loginService.getUser(this.signInObj).subscribe((res) => {
        if (!res) {
          alert('Wrong username or password');
        } else {
          this.loginService.login().subscribe(() => {
            localStorage.setItem('token', res);
            this.router.navigate(['products']);
          });
          console.log('here')
        }
    });
  }

  showPassword() {
    this.hidePassword = !this.hidePassword;
  }
}
