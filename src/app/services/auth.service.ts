import { Injectable } from '@angular/core';
import { Iuser } from '../models/iuser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser:Iuser | undefined;
  constructor() { }
  login(username:string,password:string){
    this.currentUser = {
      userName : username,
      password : password
    };
  }
  get isLoggedIn():boolean{
    if(this.currentUser?.userName && this.currentUser?.password){
      return true;
    }else{return false;}
  }
  logOut(){
    this.currentUser = undefined;
  }
}
