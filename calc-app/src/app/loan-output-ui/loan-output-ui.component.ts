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
  

  


  constructor(private loanDataService: LoanDataService) { 
    
  }

  ngOnInit() {
   
  }

}
 