import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ksl-subtract',
  templateUrl: './ksl-subtract.component.html',
  styleUrls: ['./ksl-subtract.component.css']
})
export class KslSubtractComponent implements OnInit {

  numberOne = 10;
  numberTwo = 5;
  answer = 5;
  subtractNumbers = () => {
    this.answer = this.numberOne - this.numberTwo;
  }
  constructor() { }

  ngOnInit() {
  }

}
