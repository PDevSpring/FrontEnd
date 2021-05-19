import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../Models/user';
import { UserInfos } from '../Models/UserInfos';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient, private router:Router, private cookie:CookieService) { }

  public getAllUsers(){
    const header = {
      headers: new HttpHeaders({
        'Authorizations': 'Bearer '+this.cookie.get('token')
      })}
    return this.http.get<any>("http://localhost:3000/app/adminArea/allusers",header);
  }

  public addAdmin(user : User){

    const header = {
      headers: new HttpHeaders({
        'Authorizations': 'Bearer '+this.cookie.get('token')
      })}
    return this.http.post<any>("http://localhost:3000/app/adminArea/registerAdmin",user,header);
  }

  public deleteUser(id : number){
    const header = {
      headers: new HttpHeaders({
        'Authorizations': 'Bearer '+this.cookie.get('token')
      })}
    return this.http.delete<any>("http://localhost:3000/app/adminArea/Delete/"+id,header)
  }

  public adminSearch(username : string){
    const header = {
      headers: new HttpHeaders({
        'Authorizations': 'Bearer '+this.cookie.get('token')
      })}
    return this.http.get<any>("http://localhost:3000/app/adminArea/search",header)
  }

  public updateUser(user:User){
    const header = {
      headers: new HttpHeaders({
        'Authorizations': 'Bearer '+this.cookie.get('token')
      })}
    return this.http.put<any>("http://localhost:3000/app/adminArea/change",user,header)
  }

  public updateUserpass(user:User){
    const header = {
      headers: new HttpHeaders({
        'Authorizations': 'Bearer '+this.cookie.get('token')
      })}
    return this.http.put<any>("http://localhost:3000/app/adminArea/changePass",user,header)
  }

  public updateClient(user:User){
    const header = {
      headers: new HttpHeaders({
        'Authorizations': 'Bearer '+this.cookie.get('token')
      })}
    return this.http.put<any>("http://localhost:3000/app/profil/change",user,header)
  }

  public updateClientpass(user:User){
    const header = {
      headers: new HttpHeaders({
        'Authorizations': 'Bearer '+this.cookie.get('token')
      })}
    return this.http.put<any>("http://localhost:3000/app/profil/changePass",user,header)
  }

  public clientSearch(username : string){
    const header = {
      headers: new HttpHeaders({
        'Authorizations': 'Bearer '+this.cookie.get('token')
      })}
    return this.http.get<any>("http://localhost:3000/app/profil/search",header)
  }
}
