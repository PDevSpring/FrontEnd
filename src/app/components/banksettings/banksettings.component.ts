import { Component, OnInit } from '@angular/core';
import {BankServiceService} from '../../Services/bank-service.service';
import {Observable} from 'rxjs';
import {NgModel} from '@angular/forms';
import { Loans } from 'src/app/Models/Loans';
import { Bank } from 'src/app/Models/Bank';
import { Agent } from 'src/app/Models/Agent';
import { LoansServiceService } from 'src/app/Services/loans-service.service';
import { LoginService } from 'src/app/Services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banksettings',
  templateUrl: './banksettings.component.html',
})
export class BanksettingsComponent implements OnInit {

  constructor(private router:Router, private service:LoginService,private loanservice: LoansServiceService, private bankservice: BankServiceService) {
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

    this.loanservice.getAllSimulations().subscribe((data: any[]) => {
      console.log(data);
      this.loaanlist = data; });
  }
  onSelect(bank: Bank): void {
    this.selectedbank = bank;
  }

  onSelectbankloan(bank: Bank): string {
    return  this.a = bank.namebank;
  }


  public AddBank(bank: Bank){
    return this.bankservice.AddBank(bank).subscribe((res) => {
      this.ngOnInit();
    });

  }

  public AddAg(agent: Agent, bankId: number) {
    return this.bankservice.Addagent(agent, bankId).subscribe((res) => {
      this.ngOnInit();
    });
  }


  public upBank(bank: Bank, bankIdd: number) {
       this.bankservice.updateBank(bank, bankIdd);
       this.ngOnInit();

    // this.delBank(bankIdd);
    // this.AddBank(bank);

  }

  public delBank(bankid: number){
   this.bankservice.deleteBankByID(bankid);
    this.ngOnInit();

  }

  public delAgent(agentid: number){
    this.bankservice.deleteAgentByID(agentid);
    this.ngOnInit();

  }

  public getbbyid(bankid: number): Observable<any> {
    return this.bankservice.getBankById(bankid);
  }
  public findbname(namebank: string): Observable<any> {
    return this.bankservice.findbankname(namebank);
  }


  onSelectloan(loan: Loans): void {
    this.selectedloan = loan;
  }

  public AddLoan(years: number, salaire: number, idad: number, nameBank: string, iduser: number) {
    this.loanservice.addSimulate(years, salaire, idad, nameBank, iduser).subscribe();
    this.ngOnInit();
  }

  public delLoan(loanid: number){
    this.loanservice.deleteSimulationById(loanid);
    this.ngOnInit();

  }

  public confirm(loanid: number){
    this.loanservice.confirmSimulation(loanid);
    this.ngOnInit();

  }

  public unconfirm(loanid: number){
    this.loanservice.unconfirmSimulation(loanid);
    this.ngOnInit();

  }

  appLogout(){
    this.service.logoutUser();
    this.router.navigate(['/'])
  }
}


