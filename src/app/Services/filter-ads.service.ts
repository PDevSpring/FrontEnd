import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Ads} from '../Models/Ads';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FilterAdsService {
  url = 'http://localhost:3000/App';
  constructor(private http: HttpClient) { }


  filterAds(location: string, price: number , nbRooms: number, kindofgood: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('location', location);
    params = params.append('price', String(price));
    params = params.append('nbRooms', String(nbRooms));
    params = params.append('kindofgood', kindofgood);
    console.log(params);
    return this.http.get(
      this.url + '/filter' , {headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
        }), params });


}}
