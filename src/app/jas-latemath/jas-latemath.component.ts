import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jas-latemath',
  templateUrl: './jas-latemath.component.html',
  styleUrls: ['./jas-latemath.component.css']
})
export class JasLatemathComponent implements OnInit {

  numberOne = 10;
  numberTwo = 20;
  answer = 30;
  addNumbers = () => {
  	this.answer = this.numberOne + this.numberTwo;
  }

  constructor() { }

  ngOnInit() {
  }

}
