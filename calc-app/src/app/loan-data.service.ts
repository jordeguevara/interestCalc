import { Injectable } from '@angular/core';
import {Loan} from './loan'
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanDataService {
  loan: Loan = new Loan(0,0,0,0);

  constructor() { }

  getLoan(){
    return this.loan;
  }
  

  addLoan(differentLoan){
    this.loan.amount = differentLoan.amount;
    this.loan.rate = differentLoan.rate/100;
    this.loan.length = differentLoan.length;
    this.loan.monthlyPayment = differentLoan.monthlyPayment;
  }
}
