import { Injectable } from '@angular/core';
import {HttpClient ,HttpParams} from '@angular/common/http'
import {Delivery} from "../Models/Delivery";
import {Fourniture} from "../Models/Fourniture";

@Injectable({
  providedIn: 'root'
})
export class ShoppingServiceService {

  constructor(private http:HttpClient) { }



  public addfour(f : Fourniture){
    return this.http.post
    ("http://localhost:3000/App/Four/addfour/{userid}"
      ,{responseType:'json'});}

  public deletefourniturebyid(){
    return this.http.delete
    ("http://localhost:3000/App/Four/deletefour/{fourid}"
      ,{responseType:'json'});}

  public getfourbyid(){
    return this.http.get
    ("http://localhost:3000/App/Four/getfourbyid/{fourid}"
      ,{responseType:'json'});}

  public Getallfourniture(){
    return this.http.get
    ("http://localhost:3000/App/Four/getallfour"
      ,{responseType:'json'});}

  public getfourpricebyid(){
    return this.http.get
    ("http://localhost:3000/App/Four/getfourpricebyid/{fourid}"
      ,{responseType:'json'});}

  public getfourstatusebyid(){
    return this.http.get
    ("http://localhost:3000/App/Four/getfourstatusbyid/{fourid}"
      ,{responseType:'json'});}

  public BuyFourniture(){
    return this.http.get
    ("http://localhost:3000/App/Four/buyfour/{fourid}"
      ,{responseType:'json'});}





public createcarte(){
  return this.http.post
  ("http://localhost:3000/App/Four/createcart/{userid}"
    ,{responseType:'json'});}

  public addtcart(){
    return this.http.post
    ("http://localhost:3000/App/Four/addcart/{cartid}/{fourid}"
      ,{responseType:'json'});}

  public removefromcart(){
    return this.http.post
    ("http://localhost:3000/App/Four/removefcart/{cartid}/{fourid}"
      ,{responseType:'json'});}

  public buytcart(delivery : Delivery){
    return this.http.post
    ("http://localhost:3000/App/Four/buycart/{cartid}"
      ,{responseType:'json'});}

}
