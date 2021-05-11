import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class ResgisterService {

  constructor(private http:HttpClient) { }

  public RegisterClient(user : User){
    return this.http.post("http://localhost:3000/home/register",user); 
  }

} 
