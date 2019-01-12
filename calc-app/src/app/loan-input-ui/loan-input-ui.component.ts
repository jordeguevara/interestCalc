import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-input-ui',
  templateUrl: './loan-input-ui.component.html',
  styleUrls: ['./loan-input-ui.component.css']
})
export class LoanInputUIComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() {
  }

  calculate(){
    let firstElement: HTMLElement = document.querySelector('#loanAmount');
    let secondElement: HTMLElement = document.querySelector('#loanAmount');
  }

  add(x: number, y: number): number {
    return x + y;
}


}
