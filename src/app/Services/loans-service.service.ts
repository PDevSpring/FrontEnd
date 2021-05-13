import { Injectable } from '@angular/core';
import {HttpClient , HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Bank} from '../Models/Bank';
import {Loans} from '../Models/Loans';
import {NgModel} from '@angular/forms';
import {Agent} from '../Models/Agent';

@Injectable({
  providedIn: 'root'
})
export class LoansServiceService {

  constructor(private http: HttpClient) { }



  public Simulate(years: number, salaire: number, idad: number , nameBank: string): any{
    const url = 'http://localhost:3000/App/Loan/Simulate/' + idad + '/' + nameBank + '/' + years + '/' + salaire;
    return this.http.post<Loans>(url, null); }

  public addSimulate(years: number, salaire: number, idad: number, nameBank: string, iduser: number): any{
      const url = 'http://localhost:3000/App/Loan/addloan/' + idad + '/' + iduser + '/' + nameBank + '/' + years + '/' + salaire;
      return this.http.post(url, null); }

  public getAllSimulations(): Observable<Loans[]>{
      return this.http.get<Loans[]>('http://localhost:3000/App/Loan/getAllloans'); }

  public getAllSimulationsByNameBank(nameBank: string): Observable<Loans[]> {
    const url = 'http://localhost:3000/App/Loan/getAllloansBynameBank/' + nameBank;

    return this.http.get<Loans[]>(url); }


  public getagentByNameBank(nameBank: string): Observable<Agent>{
        const url = 'http://localhost:3000/App/Loan/getagent/' + nameBank;
        console.log(url);
        return this.http.get<Agent>(url);
  }

        public deleteSimulationById(idlo: number){
    console.log(idlo);
    const url = 'http://localhost:3000/App/Loan/deleteById/' + idlo;
    console.log(url);
    return this.http.delete(url).subscribe(data => {
      console.log(data);
    }); }


  public confirmSimulation(id: number): any{
        const url = 'http://localhost:3000/App/Loan/confirm/' + id;
        return this.http.put(url, null).subscribe(data => {
          console.log(data); });
  }


  public unconfirmSimulation(id: number): any{
        const url = 'http://localhost:3000/App/Loan/unconfirm/' + id;
        return this.http.put(url, null).subscribe(data => {
          console.log(data); }); }
}
