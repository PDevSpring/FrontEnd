import { Injectable } from '@angular/core';
import {HttpClient , HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Bank} from "../Models/Bank";
import {Loans} from "../Models/Loans";

@Injectable({
  providedIn: 'root'
})
export class LoansServiceService {

  constructor(private http: HttpClient) { }



  public Simulate(years: number, salaire: number, idad: number , nameBank: string): any{
    const url = 'http://localhost:3000/App/Loan/Simulate/' + idad + '/' + nameBank + '/' + years + '/' + salaire;
    return this.http.post(url, null); }

  public addSimulate(years: number, salaire: number, idad: number , nameBank: string , iduser: number): any{
      const url = 'http://localhost:3000/App/Loan/addloan/' + idad + '/' + iduser + '/' + nameBank + '/' + years + '/' + salaire;
      return this.http.post(url, null); }

  public getAllSimulations(): Observable<Loans[]>{
      return this.http.get<Loans[]>('http://localhost:3000/App/Loan/getAllloans'); }

  public getAllSimulationsByNameBank(nameBank: string): any{
    const url = 'http://localhost:3000/App/Loan/getAllloans/' + nameBank;
    return this.http.get(url); }


  public getagentByNameBank(nameBank: string): any{
        const url = 'http://localhost:3000/App/Loan/getagent/' + nameBank;
        return this.http.get(url); }

  public deleteSimulationById(id: number): any{
        const url = 'http://localhost:3000/App/Loan/getagent/' + id;
        return this.http.delete(url); }



  public confirmSimulation(id: number): any{
        const url = 'http://localhost:3000/App/Loan/confirm/' + id;
        return this.http.put(url, null); }


  public unconfirmSimulation(id: number): any{
        const url = 'http://localhost:3000/App/Loan/unconfirm/' + id;
        return this.http.put(url, null); }}
