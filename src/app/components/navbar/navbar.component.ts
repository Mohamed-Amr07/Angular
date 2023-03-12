import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private authService:AuthService){}

  get getUserName(){
    return this.authService.currentUser?.userName;
  }
  get isLoggedIn(){
    return this.authService.isLoggedIn;
  }
  logOut(){
    this.authService.logOut();
  }
}
