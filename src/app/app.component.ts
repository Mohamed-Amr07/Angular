import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lab3';
  DataFromContent:any;
  getData(data:any){
    this.DataFromContent = data;
  }
}
