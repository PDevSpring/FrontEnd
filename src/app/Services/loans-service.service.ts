import { Injectable } from '@angular/core';
import {HttpClient ,HttpParams} from '@angular/common/http';

@Injectable()
export class LoansServiceService {

  constructor(private http:HttpClient) { }

 /* let paramssimulate = new HttpParams()
    .set('idad', PageNo)
    .set('nameBank', bank.nameBank);
    .set('nameBank', SortOn);
    .set('years', SortOn);
    .set('salaire', ); */

  public Simulate(){
    return this.http.post
    ("http://localhost:3000/App/Loan/Simulate/{idad}/{nameBank}/{years}/{salaire}"
      ,{responseType:'json'}
      );
  }
  /* let paramssimulate = new HttpParams()
      .set('idad', PageNo)
      .set('nameBank', bank.nameBank);
      .set('nameBank', SortOn);
      .set('years', SortOn);
      .set('salaire', ); */

    public addSimulate(){
  return this.http.post
  ("http://localhost:3000/App/Loan/addloan/{idad}/{iduser}/{nameBank}/{years}/{salaire}"
    ,{responseType:'json'}
      );}

      /* let paramssimulate = new HttpParams()
        .set('idad', PageNo)
        .set('nameBank', bank.nameBank);
        .set('nameBank', SortOn);
        .set('years', SortOn);
        .set('salaire', ); */

    public getAllSimulations(){
        return this.http.get
        ("http://localhost:3000/App/Loan/getAllloans"
          ,{responseType:'json'});}
      public getAllSimulationsByNameBank(){
          return this.http.get
          ("http://localhost:3000/App/Loan/getAllloans/{nameBank}"
            ,{responseType:'json'});}


      public getagentByNameBank(){
          return this.http.get
          ("http://localhost:3000/App/Loan/getagent/{nameBank}"
            ,{responseType:'json'});}



      public deleteSimulationById(){
          return this.http.delete
          ("http://localhost:3000/App/Loan/deleteById/{id}"
            ,{responseType:'json'});}



      public confirmSimulation(){
          return this.http.put
          ("http://localhost:3000/App/Loan/confirm/{id}"
            ,{responseType:'json'});
        }
      public unconfirmSimulation(){
          return this.http.put
          ("http://localhost:3000/App/Loan/unconfirm/{id}"
            ,{responseType:'json'});
        }
}
