import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnChanges, OnInit, OnDestroy{
  userName:string='';
  password:string='';

  login(){
    this.authService.login(this.userName,this.password);
    this.router.navigate(['/products'])
    }


  @Input() LoginData:boolean=false;
  TitleData:string='';
  ngOnDestroy(){

  }
  constructor(private authService:AuthService,private router:Router){
    console.log("First reaction");
  }
  ngOnChanges(changes: SimpleChanges): void {
      console.log("OnChanges222");
      if(this.LoginData){
        this.TitleData = 'Login Component00000000';
      }else{
        this.TitleData = 'Nothing';
      }
  }

  ngOnInit(): void {
    console.log("Second reaction");
    // Promise.resolve().then(() => this.myEvent.emit(this.DataFromContent));
  }

}
