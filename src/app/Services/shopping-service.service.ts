import { Injectable } from '@angular/core';
import {HttpClient , HttpParams} from '@angular/common/http';
import {Delivery} from '../Models/Delivery';
import {Fourniture} from '../Models/Fourniture';
import {Cart} from '../Models/Cart';
import {Observable, throwError} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ShoppingServiceService {

  constructor(private http: HttpClient) { }

  public fileUpload(imgaeFile: File,identifier : number) {
    const formData = new FormData();
    console.log(imgaeFile.size);
    formData.append('file', imgaeFile);
    formData.append('identifier', identifier + '');
    return this.http.post('http://localhost:3000/App/Four/Fournitureup', formData);
  }

  public addfour(f: Fourniture, userid: number): Observable<Fourniture>{
      const url = 'http://localhost:3000/App/Four/addfour/' + userid ;
      console.log(url);
      return this.http.post<Fourniture>(url, f); }

  public getfourimg(fourid: number): any{
    const url = 'http://localhost:3000/App/Four/getfourimg/' + fourid ;
    console.log(url);
    return this.http.get(url); }

  public addfourimg(f: Fourniture, fourid: number): any{
    const url = 'http://localhost:3000/App/Four/addfourimg/' + fourid ;
    console.log(url);
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

  public getfourOwnerbyid(userid: number): any{
    const url = 'http://localhost:3000/App/Four/getfourownerbyid/' + userid ;
    return this.http.get(url); }

  public getfourstatusebyid(fourid: number): any{
    const url = 'http://localhost:3000/App/Four/getfourstatusbyid/' + fourid ;
    return this.http.get(url); }


  public BuyFourniture(fourid: number): any{
  const url = 'http://localhost:3000/App/Four/buyfour/' + fourid ;
  return this.http.get(url); }


  public GetCartfour(cartid: number): Observable<Fourniture[]>{
    const url = 'http://localhost:3000/App/Four/getcartfour/' + cartid ;
    return this.http.get<Fourniture[]>(url); }



  public GetCart(cartid: number): any{
    const url = 'http://localhost:3000/App/Four/getcart/' + cartid ;
    return this.http.get(url); }
/*
  public createcarte(userid: number): any{
    return this.http.post
    ('http://localhost:3000/App/Four/createcart/' + userid, null); }
*/

  public GetCartbyuser(userid: number): Observable<Cart>{
    const url = 'http://localhost:3000/App/Four/getcartuser/' + userid ;

    return this.http.get<Cart>(url);
  }

  public Getdelbyuser(userid: number): Observable<Delivery[]>{
    const url = 'http://localhost:3000/App/Four/getalldelbyuser/' + userid ;

    return this.http.get<Delivery[]>(url);
  }

  public Getdelowneruser(fourid: number): Observable<Delivery>{

    const url = 'http://localhost:3000/App/Four/getdel/' + fourid ;

    return this.http.get<Delivery>(url);
  }



  public addtcart(fourid: number, cartid: number): any{
    const url = 'http://localhost:3000/App/Four/addcart/' + cartid + '/' + fourid ;
    console.log(url);
    return this.http.post(url, null).subscribe(); }

  public removefromcart(fourid: number, cartid: number): any{
    const url = 'http://localhost:3000/App/Four/removefcart/' + cartid + '/' + fourid ;
    return this.http.post(url, null); }

  public buytcart(delivery: Delivery, cartid: number): any{
    const url = 'http://localhost:3000/App/Four/buycart/' + cartid;
    console.log(url);
    console.log(delivery);
    return this.http.post(url, delivery).subscribe(data => {
      console.log(data); });
  }

    public Ship(deliveryid: number): any{
    const url = 'http://localhost:3000/App/Four/shiporder/' + deliveryid ;
    return this.http.post(url, null); }
}
