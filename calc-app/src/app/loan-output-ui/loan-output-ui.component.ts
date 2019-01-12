import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-output-ui',
  templateUrl: './loan-output-ui.component.html',
  styleUrls: ['./loan-output-ui.component.css']
})
export class LoanOutputUIComponent implements OnInit {

  loanAmount = 0;
  interestRate =0;
  years = 0;
  monthlyPayments = 0;


  constructor() { }

  ngOnInit() {
  }

}
