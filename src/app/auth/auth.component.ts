import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService, AuthResponse } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  @ViewChild('authForm') authForm: NgForm;
  isLoggedIn = false;
  isLoading = false;
  error: string = null;
  authObs: Observable<AuthResponse>;
  constructor(private authService: AuthService, private router : Router) {}

  ngOnInit(): void {}
  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }
  onSubmit() {
    if (this.authForm.invalid) {
      return;
    }
    if (this.isLoggedIn) {
      this.authObs =  this.authService.login(
        this.authForm.value.email,
        this.authForm.value.password
      );
    } else {
      this.isLoading = true;
      this.authObs = this.authService.signUp(
        this.authForm.value.email,
        this.authForm.value.password
      );

      this.isLoading = false;
    }
    this.authObs.subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/recipes']);
      },
      (error) => {
        this.error = error;
        console.log(error);
      }
    );
    this.authForm.reset();
  }
}
