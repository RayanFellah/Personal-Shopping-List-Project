import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUp } from 'src/app/models/signup';
import { LoginService } from 'src/app/services/login-http.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  form: FormGroup;
  name: AbstractControl;
  email: AbstractControl;
  password: AbstractControl;
  // confirmPassword: AbstractControl;
  signUpObj: SignUp = {
    name: '',
    password: '',
    email: ''
  }
  constructor(private readonly loginHttpService: LoginService, private readonly router: Router, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/)]],
      // confirmPassword: ['', Validators.required]
    });
    this.name = this.form.get('name') as AbstractControl<any, any>;
    this.password = this.form.get('password') as AbstractControl<any, any>;
    this.email = this.form.get('email') as AbstractControl<any, any>;
    // this.confirmPassword = this.form.get('confirmPassword');

    // this.confirmPassword.setValidators([Validators.required, this.passwordMatchValidator.bind(this)]);
  }

  onSignUp() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.loginHttpService.addUser(this.form.value).subscribe({
        next: (res) => {
          if (!res) {
            alert('This email is already linked to another account!');
          } else {
            this.router.navigate(['signin']);
          }

        },
        error: (err) => {

        }
      });
    }
  }

  // private buildSignUpObj() {
  //   this.signUpObj = {
  //     email: this.form.get('email'),
  //     password: this.form.get('password'),

  //   }
  // }
}

