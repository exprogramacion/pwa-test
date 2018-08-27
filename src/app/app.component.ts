import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  TTD: any[];
  WTS: any[];

  ngOnInit() {
    this.TTD = [
      {title:"ABC Zipline", price: 50.00, valoration:4, src:"assets/img/background2.jpg"},
      {title:"ABC Rafting", price: 50.00, valoration:3.5, src:"assets/img/background2-1.jpg"}
    ];

    this.WTS = [
      {title:"ABC London", price: 50.00, valoration:4.5, src:"assets/img/background3.jpg"},
      {title:"ABC Germany", price: 50.00, valoration:5, src:"assets/img/background3-1.jpg"}
    ]
  }
}
