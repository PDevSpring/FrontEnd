import { Injectable } from '@angular/core';
import {HttpClient , HttpParams} from '@angular/common/http';
import {Bank} from '../Models/Bank';
import {Agent} from '../Models/Agent';


@Injectable()
export class BankServiceService {

  constructor(private http: HttpClient) { }

  /* let paramssimulate = new HttpParams()
    .set('idad', PageNo)
    .set('nameBank', bank.nameBank);
    .set('nameBank', SortOn);
    .set('years', SortOn);
    .set('salaire', ); */


  public AddBank(bank: Bank){
    return this.http.post
    ('http://localhost:3000/App/Bank/addBank', bank); }

  public Addagent(agent: Agent, bankId: number){
    const url = 'http://localhost:3000/App/Bank/addagent/' + bankId;
    return this.http.post(url, agent); }

    public updateBank(bank: Bank){
      const endpointurl = 'http://localhost:3000/App/Bank/updateBank';
      return this.http.put(endpointurl, bank); }

      public deleteBankByID(bankId: number){
        const url = 'http://localhost:3000/App/Bank/deleteBank/' + bankId;
        return this.http.delete(url); }

       public getBankById(bankId: number){
          const url = 'http://localhost:3000/App/Bank/getBankById/' + bankId;
          return this.http.get(url); }


          public getAllBanks(){
              return this.http.get('http://localhost:3000/App/Bank/getallBanks'); }

            public findbankname(namebank: string){
              const url = 'http://localhost:3000/App/Bank/getBankname/' + namebank;
              return this.http.get(url); }

            }
