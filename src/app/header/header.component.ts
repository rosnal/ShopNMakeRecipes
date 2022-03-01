import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {

  isAuthenticated = false;
  collapsed = true;
  constructor(private dataStore : DataStorageService, private authService : AuthService) { }
  ngOnDestroy(): void {
    this.authService.user.unsubscribe();
  }

  ngOnInit(): void {
    this.authService.user.subscribe(user =>{
      this.isAuthenticated = !!user;
    })
  }
  onSave(){
    this.dataStore.storeData();
  }
  onLogOut(){
    this.authService.logOut();
  }
  onFetch(){
    this.dataStore.fetchData().subscribe();
  }
}
