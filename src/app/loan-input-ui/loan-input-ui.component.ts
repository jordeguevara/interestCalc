import { LoanDataService } from './../loan-data.service';
import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import {Loan} from '../loan';


@Component({
  selector: 'app-loan-input-ui',
  templateUrl: './loan-input-ui.component.html',
  styleUrls: ['./loan-input-ui.component.css']
})
export class LoanInputUIComponent implements OnInit {

  constructor(private loanDataService: LoanDataService ) { 

  }

  ngOnInit() {
  }

  // get the data from input fields and calculates intetest rate 
  getLoan(){
    let loanAmount:any= document.querySelector('#loanAmount');
    let interestRate: any= document.querySelector('#loanPercent');
    let years: any= document.querySelector('#years');

    let result:number = this.calculateLoan(loanAmount.value , interestRate.value ,years.value);
    const loanInfo = new Loan(loanAmount.value , interestRate.value ,years.value, result);

    this.loanDataService.addLoan(loanInfo);
    return loanInfo;
  }
  // Simple interest = PrinipialAmount(1 + rate(time))
  calculateLoan(loanAmount:number, interestRate: number, numberOfYears: number) :number{
    return loanAmount*(1 + (interestRate/100)*numberOfYears)/(12*numberOfYears);
  }


}
