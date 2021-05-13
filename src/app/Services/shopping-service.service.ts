import { Injectable } from '@angular/core';
import {HttpClient , HttpParams} from '@angular/common/http';
import {Delivery} from '../Models/Delivery';
import {Fourniture} from '../Models/Fourniture';
@Injectable({
  providedIn: 'root'
})
export class ShoppingServiceService {

  constructor(private http: HttpClient) { }


  public addfour(f: Fourniture, userid: number): any{
      const url = 'http://localhost:3000/App/Four/addfour/' + userid ;
      return this.http.post(url, f); }

  public deletefourniturebyid(fourid: number): any{
    const url = 'http://localhost:3000/App/Four/deletefour/' + fourid ;
    return this.http.delete(url); }

  public getfourbyid(fourid: number): any{
    const url = 'http://localhost:3000/App/Four/getfourbyid/' + fourid ;
    return this.http.get(url); }

  public Getallfourniture(): any{
    return this.http.get('http://localhost:3000/App/Four/getallfour'); }

  public getfourpricebyid(fourid: number): any{
    const url = 'http://localhost:3000/App/Four/getfourpricebyid/' + fourid ;
    return this.http.get(url); }

  public getfourstatusebyid(fourid: number): any{
    const url = 'http://localhost:3000/App/Four/getfourstatusbyid/' + fourid ;
    return this.http.get(url); }


  public BuyFourniture(fourid: number): any{
  const url = 'http://localhost:3000/App/Four/buyfour/' + fourid ;
  return this.http.get(url); }





public createcarte(userid: number): any{
  return this.http.post
  ('http://localhost:3000/App/Four/createcart/{userid}', null); }

  public addtcart(fourid: number, cartid: number): any{
    const url = 'http://localhost:3000/App/Four/addcart/' + cartid + '/' + fourid;
    return this.http.post(url, null); }

  public removefromcart(fourid: number, cartid: number): any{
    const url = 'http://localhost:3000/App/Four/removefcart/' + cartid + '/' + fourid;
    return this.http.post(url, null); }

  public buytcart(delivery: Delivery, cartid: number): any{
    const url = 'http://localhost:3000/App/Four/buycart/' + cartid;
    return this.http.post(url, delivery); }

}
