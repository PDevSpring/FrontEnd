import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Ads} from '../Models/Ads';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';



@Injectable()
export class AdsService {
   url = 'http://localhost:3000/App';

  constructor(private http: HttpClient) { }

  getAllAds(): Observable<any> {

    return this.http.get(
      this.url + '/ads/' , {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
        })
      }
    );
  }




  public newad(ads: Ads, userid: number){
    return this.http.post
    (this.url + '/newad/' + userid, ads, {responseType: 'text' as 'json',
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      })
    }); }



  public updateadid(ads: Ads, adID: any){
    console.log(ads);
    console.log(adID);
    return this.http.put(this.url + '/updatead/' + adID, ads, {responseType: 'text' as 'json', headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      })} ); }

  // tslint:disable-next-line:typedef
  public deleteAddByID( adID: number){
    return this.http.delete(this.url + '/deletead/' + adID, { headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      })}); }



  public findbyId(adID: number){
    return this.http.get(this.url + '/findad/' + adID, { headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      })}); }


  public incrLikes( adID: number){
    return this.http.put(this.url + '/incLikesad/' + adID, Ads, {responseType: 'text' as 'json', headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      })} ).
    pipe(
      map((data: any) => {
        console.log(data);
        return data;
      }), catchError( error => {
        return throwError( 'Something went wrong!' );
      })); }

  public incrdislikes( adID: any){
  return this.http.put(this.url + '/incDislikesad/' + adID, Ads,   {responseType: 'text' as 'json', headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
    })} ).
  pipe(
    map((data: any) => {
      console.log(data);
      return data;
    }), catchError( error => {
      return throwError( 'Something went wrong!' );
    }));  }


  public nboflikes(adID: number){
    return this.http.get(this.url + '/getlike/' + adID, { headers: new HttpHeaders({
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
})});
  }

  public nbofdislikes(adID: number){
    return this.http.get(this.url + '/getdislike/' + adID, { headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      })});
  }

  public mostlikedad(ads: Ads){
    return this.http.get(this.url + '/getmostliked', { headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      })});
  }

  public alllikes(ads: Ads){
    return this.http.get(this.url + '/getallliked', { headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      })});
  }

  public alldislikes(ads: Ads){
    return this.http.get(this.url + '/getalldisliked', { headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      })});
  }









}
