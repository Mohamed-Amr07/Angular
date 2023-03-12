import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnChanges, OnInit{
  DataFromContent:string='Data From Content';
  @Output() myEvent = new EventEmitter();
  sendData(){
    this.myEvent.emit(this.DataFromContent);
  }
  constructor(){
    console.log("First reaction");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("OnChanges");
  }
  ngOnInit(): void {
    console.log("Second reaction");
    Promise.resolve().then(() => this.myEvent.emit(this.DataFromContent));
  }

}
