import { Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceholderDirective } from '../shared/placeholder/place-holder.directive';
import { AuthService, AuthResponse } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit , OnDestroy{
  @ViewChild('authForm') authForm: NgForm;
  isLoggedIn = false;
  isLoading = false;
  error: string = null;
  authObs: Observable<AuthResponse>;
  @ViewChild(PlaceholderDirective,{static:false}) placeHolder : PlaceholderDirective;
  private alertSubscription : Subscription;
  constructor(private authService: AuthService, private router : Router) {}
  ngOnDestroy(): void {
    if(this.alertSubscription){
      this.alertSubscription.unsubscribe();
    }
  }

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
         this.showErrorAlert(error);
      }
    );
    this.authForm.reset();
  }
  onClose(){
    this.error = null;
  }
  private showErrorAlert(message : string){
    this.placeHolder.viewContainerRef.clear();
    const alertRef = this.placeHolder.viewContainerRef.createComponent(AlertComponent);
    alertRef.instance.message = message;
    this.alertSubscription =  alertRef.instance.close.subscribe(()=>{
      this.alertSubscription.unsubscribe();
      this.placeHolder.viewContainerRef.clear();
    });
  }
}
