import { Component, OnInit } from '@angular/core';
import {LoansServiceService} from '../../Services/loans-service.service';
import {BankServiceService} from '../../Services/bank-service.service';
import {Bank} from '../../Models/Bank';
import {Agent} from '../../Models/Agent';
import {Loans} from '../../Models/Loans';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-simulate',
  templateUrl: './simulate.component.html',
  styleUrls: ['./simulate.component.css']
})
export class SimulateComponent implements OnInit {

  constructor(private loanservice: LoansServiceService, private bankservice: BankServiceService) {
    this.ScriptElement = document.createElement('script');
    this.ScriptElement.src = '../../../assets/js/main.js';
    document.body.appendChild(this.ScriptElement);

    this.ScriptElement1 = document.createElement('script');
    this.ScriptElement1.src = '../../../assets/vendor/bootstrap/js/bootstrap.bundle.min.js';
    document.body.appendChild(this.ScriptElement1);

    this.ScriptElement2 = document.createElement('script');
    this.ScriptElement2.src = '../../../assets/vendor/php-email-form/validate.js';
    document.body.appendChild(this.ScriptElement2);

    this.ScriptElement3 = document.createElement('script');
    this.ScriptElement3.src = '../../../assets/vendor/swiper/swiper-bundle.min.js';
    document.body.appendChild(this.ScriptElement3); }
  banke = new Bank(0, '', '', '', 0, 0);
  bankloan = new Bank(0, '', '', '', 0, 0);

  agent = new Agent(0, '', '', '', '', 0, '', '');
  loans = new Loans(0, '', 0, '', 0, 0, 0, 0, 0, 0, 0, 0, 0 );
  ScriptElement: HTMLScriptElement;
  ScriptElement1: HTMLScriptElement;
  ScriptElement2: HTMLScriptElement;
  ScriptElement3: HTMLScriptElement;


  loaanlist: Loans[] = [];
  banklist: Bank[] = [];
  banksell: Bank[] = [];
  a = '';
  agentslist: Agent[] = [];
  selectedbank?: Bank;
  selectedloan?: Loans;
  selectedbankforloan?: Bank;



  ngOnInit(): void {

    this.bankservice.getAllBanks().subscribe((data: any[]) => {
      console.log(data);
      this.banklist = data; });

    this.bankservice.getAlllAgents().subscribe(
      data => {
        this.agentslist = data; });

    this.loaanlist = [];
  }



  onSelect(bank: Bank): void {
    this.selectedbank = bank;
  }

  onSelectbankloan(bank: Bank): string {
    return  this.a = bank.namebank;
  }

  onSelectloan(loan: Loans): void {
    this.selectedloan = loan;
  }

  public Simulate(years: number, salaire: number, idad: number, nameBank: string) {

     this.loanservice.Simulate(years, salaire, idad, nameBank).subscribe
     ((data: Loans) => {
       console.log(data);
       this.loans = data; });
     console.log( this.loans);
     return this.loans;
  }
}
