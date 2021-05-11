import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { LoginRequest } from '../Models/loginRequest';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient, private router:Router, private cookie:CookieService) { }

  public getUserDetails(token : any){
    return this.http.post<any>("http://localhost:3000/home/getuserDetails",token,{responseType : 'json'});
  }

  public loginUser(loginRequest : LoginRequest ){
    return this.http.post<any>("http://localhost:3000/home/Login",loginRequest,{responseType : 'json'}); 
  }

  public logoutUser(){
    this.cookie.delete('token')
  }

  

}
