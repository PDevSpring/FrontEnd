import { Injectable } from '@angular/core';
import {HttpClient , HttpParams} from '@angular/common/http';

@Injectable()
export class LoansServiceService {

  constructor(private http: HttpClient) { }



  public Simulate(years: number, salaire: number, idad: number , nameBank: string){
    const url = 'http://localhost:3000/App/Loan/Simulate/' + idad + '/' + nameBank + '/' + years + '/' + salaire;
    return this.http.post(url); }

    public addSimulate(years: number, salaire: number, idad: number , nameBank: string , iduser: number){
      const url = 'http://localhost:3000/App/Loan/addloan/' + idad + '/' + iduser + '/'+ nameBank + '/' + years + '/' + salaire;
      return this.http.post(url); }

    public getAllSimulations(){
      return this.http.get('http://localhost:3000/App/Loan/getAllloans'); }

  public getAllSimulationsByNameBank(nameBank: string){
    const url = 'http://localhost:3000/App/Loan/getAllloans/' + nameBank;
    return this.http.get(url); }


      public getagentByNameBank(nameBank: string){
        const url = 'http://localhost:3000/App/Loan/getagent/' + nameBank;
        return this.http.get(url); }

      public deleteSimulationById(id: number){
        const url = 'http://localhost:3000/App/Loan/getagent/' + id;
          return this.http.delete(url); }



      public confirmSimulation(id: number){
        const url = 'http://localhost:3000/App/Loan/confirm/' + id;
        return this.http.put(url); }


      public unconfirmSimulation(id: number){
        const url = 'http://localhost:3000/App/Loan/unconfirm/' + id;
        return this.http.put(url); }}
