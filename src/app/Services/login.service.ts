import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { LoginRequest } from '../Models/loginRequest';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  public loginUser(loginRequest : LoginRequest ){
    return this.http.post("http://localhost:3000/home/Login",loginRequest,{responseType:'json'}); 
  }
}
