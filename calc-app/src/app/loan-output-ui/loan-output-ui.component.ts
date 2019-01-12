import { LoanDataService } from './../loan-data.service';
import { Component, OnInit } from '@angular/core';
import {Loan} from '../loan'
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-loan-output-ui',
  templateUrl: './loan-output-ui.component.html',
  styleUrls: ['./loan-output-ui.component.css']
})
export class LoanOutputUIComponent implements OnInit {


  loan: Loan = this.loanDataService.getLoan();
  
  loanAmount = this.loan.amount;
  interestRate =this.loan.rate;
  years = this.loan.length;
  monthlyPayments = this.loan.monthlyPayment;

  


  constructor(private loanDataService: LoanDataService) { 
  
  }

  ngOnInit() {
    console.log(this.loan)
  }

}
 