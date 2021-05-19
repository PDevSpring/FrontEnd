import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import {Bank} from '../Models/Bank';
import {Agent} from '../Models/Agent';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BankServiceService {


  constructor(private http: HttpClient) {

    const results = [];
  }


  public AddBank(bank: Bank){
    const headersObject = new HttpHeaders();
    return this.http.post('http://localhost:3000/App/Bank/addBank',
      bank).
    pipe(
      map((data: any) => {
        return data;
      }), catchError( error => {
        return throwError( 'Something went wrong!' );
      })); }







  public Addagent(agent: Agent, bankId: number) {
    console.log(agent);

    const url = 'http://localhost:3000/App/Bank/addagent/' + bankId;
    console.log(url);
    return this.http.post(url, agent).
    pipe(
      map((data: any) => {
        return data;
      }), catchError( error => {
        return throwError( 'Something went wrong!' );
      })); }

  public updateBank(bank: Bank, bankId: number) {
    console.log(bank);
    const endpointurl = 'http://localhost:3000/App/Bank/updateBank/' + bankId;
    console.log(endpointurl);
    return this.http.put(endpointurl, bank).subscribe(data => {
      console.log(data);
    });
  }

  public deleteBankByID(bankId: number){
    console.log(bankId);
    const url = 'http://localhost:3000/App/Bank/deleteBank/' + bankId;
    console.log(url);
    return this.http.delete(url).subscribe(data => {
      console.log(data);
    }); }

  public deleteAgentByID(agentid: number){
    console.log(agentid);
    const url = 'http://localhost:3000/App/Bank/deleteagent/' + agentid;
    console.log(url);
    return this.http.delete(url).subscribe(data => {
      console.log(data);
    }); }




  // tslint:disable-next-line:typedef
  public getBankById(bankId: number) {
    const url = 'http://localhost:3000/App/Bank/getBankById/' + bankId;
    return this.http.get(url, {responseType: 'json'});
  }

  getAlllAgents(): Observable<Agent[]> {
    return this.http.get<Agent[]>('http://localhost:3000/App/Bank/getallagents'); }

  getAllBanks(): Observable<Bank[]> {
    return this.http.get<Bank[]>('http://localhost:3000/App/Bank/getallBanks'); }

    findbankname(namebank: string): any{
      const url = 'http://localhost:3000/App/Bank/getBankname/' + namebank;
      return this.http.get(url); }



}
