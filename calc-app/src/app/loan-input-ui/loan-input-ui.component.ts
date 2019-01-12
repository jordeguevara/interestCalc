import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { shouldCallLifecycleInitHook } from '@angular/core/src/view';
import { NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core/src/view/provider';

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

  // get the data from input fields and calculates intetest rate 
  getSimpleInterest(){
    let loanAmount:any= document.querySelector('#loanAmount');
    let interestRate: any= document.querySelector('#loanPercent');
    let years: any= document.querySelector('#years');

    let result:number = this.calculateLoan(loanAmount.value , interestRate.value ,years.value);
    console.log(result);
    return result;
  }
  // Simple interest = PrinipialAmount(1 + rate(time))
  calculateLoan(loanAmount:number, interestRate: number, numberOfYears: number) :number{
    return loanAmount*((1 + interestRate)*numberOfYears);
  }


}
