import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jas-addition',
  templateUrl: './jas-addition.component.html',
  styleUrls: ['./jas-addition.component.css']
})
export class JasAdditionComponent implements OnInit {

numberOne = 2;
  numberTwo = 2;
  answer = 4;
  addNumbers = () => {
    this.answer = this.numberOne + this.numberTwo;
 }

  constructor() { }

  ngOnInit() {
  }

}
