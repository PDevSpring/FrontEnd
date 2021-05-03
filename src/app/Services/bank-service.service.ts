import { Injectable } from '@angular/core';
import {HttpClient ,HttpParams} from '@angular/common/http';
import {Bank} from "../Models/Bank";
import {Agent} from "../Models/Agent";

@Injectable()
export class BankServiceService {

  constructor(private http:HttpClient) { }

  /* let paramssimulate = new HttpParams()
    .set('idad', PageNo)
    .set('nameBank', bank.nameBank);
    .set('nameBank', SortOn);
    .set('years', SortOn);
    .set('salaire', ); */


  public AddBank(bank : Bank){
    return this.http.post
    ("http://localhost:3000/App/Bank/addBank"
      ,{responseType:'json'});}

  public Addagent(agent : Agent){
    return this.http.post
    ("http://localhost:3000/App/Bank/addagent/{bankId}"
      ,{responseType:'json'});}

    public updateBank(bank : Bank){
        return this.http.put
        ("http://localhost:3000/App/Bank/updateBank"
          ,{responseType:'json'});}

      public deleteBankByID(){
          return this.http.delete
          ("http://localhost:3000/App/Bank/deleteBank/{bankId}"
            ,{responseType:'json'});}

        public getBankById(){
            return this.http.get
            ("http://localhost:3000/App/Bank/getBankById/{id}"
              ,{responseType:'json'});}

          public getAllBanks(){
              return this.http.get
              ("http://localhost:3000/App/Bank/getallBanks"
                ,{responseType:'json'});}

            public findbankname(){
                return this.http.get
                ("http://localhost:3000/App/Bank/getBankname/{namebank}"
                  ,{responseType:'json'});}

            }
