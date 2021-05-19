import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Appointment} from '../Models/Appointment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  url = 'http://localhost:3000/App';
  constructor(private http: HttpClient) { }

  getAllApp(): Observable<Appointment[]> {
    return this.http.get <Appointment[]>(
      this.url + '/allapps' , {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
        })
      }
    );
  }

  getAllAppByiD(adid: number): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(
      this.url + '/allappsbyad/' + adid , {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
        })
      }
    );
  }
  public addnewapp (app: Appointment, adID: number){
    console.log(app);
    return this.http.post(this.url + '/newapp/' + adID, app, {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      })}).subscribe();
  }

  public Deleteapp (appointmentId: number){
  return this.http.delete(this.url + '/deleteapp/' + appointmentId, {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
    })});
  }
}
