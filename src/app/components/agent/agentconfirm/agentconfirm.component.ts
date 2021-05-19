import { Component, OnInit } from '@angular/core';
import {LoansServiceService} from '../../../Services/loans-service.service';
import {BankServiceService} from '../../../Services/bank-service.service';
import {Bank} from '../../../Models/Bank';
import {Agent} from '../../../Models/Agent';
import {Loans} from '../../../Models/Loans';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-agentconfirm',
  templateUrl: './agentconfirm.component.html',
  styleUrls: ['./agentconfirm.component.css']
})
export class AgentconfirmComponent implements OnInit {


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

  agentt = new Agent(0, '', '', '', '', 0, '', '');
  loans = new Loans(0, '', 0, '', 0, 0, 0, 0, 0, 0, 0, 0, 0 );
  ScriptElement: HTMLScriptElement;
  ScriptElement1: HTMLScriptElement;
  ScriptElement2: HTMLScriptElement;
  ScriptElement3: HTMLScriptElement;


  loaanlist: Loans[] = [];
  agentlist: Agent[] = [];
  banklist: Bank[] = [];
  banksell: Bank[] = [];
  a = '';
  agentslist: Agent[] = [];
  selectedbank?: Bank;
  selectedloan?: Loans;
  selectedbankforloan?: Bank;
  isShown = false ; // hidden by default
  Validate = false ; // hidden by default

  ngOnInit(): void {
  }


  toggleShow() {

    this.isShown = ! this.isShown;

  }
  get(nameBank: string, pass: string){
    this.toggleShow();
    this.getsimulationbynamebank(nameBank);

    this.checkpassword(this.getagent(nameBank), pass);
    if (this.Validate === true){
      this.agentt  = this.getagent(nameBank);
    }
  }
  checkpassword(agent: Agent, pass: string): boolean {
    if (agent.password === pass) {
      this.Validate = true;
      this.agentt = agent;
      return this.Validate;
    } else {
      this.Validate = false;
      return this.Validate;
    }
  }

  getagent(Bankname: string): Agent {
  this.loanservice.getagentByNameBank(Bankname).subscribe( (data) => {
   this.agentt = data; });
  return this.agentt;
  }

  getsimulationbynamebank(Bankname: string) {

    this.loanservice.getAllSimulationsByNameBank(Bankname).subscribe((data: Loans[]) => {
      this.loaanlist = data; });
  }

  public confirm(loanid: number, Bankname: string) {
    this.loanservice.confirmSimulation(loanid);
   return this.getsimulationbynamebank(Bankname);
  }

  public unconfirm(loanid: number, Bankname: string) {
    this.loanservice.unconfirmSimulation(loanid);
    return this.getsimulationbynamebank(Bankname);
  }
  onSelectloan(loan: Loans): void {
    this.selectedloan = loan;
  }

}
