import { Component, OnInit } from '@angular/core';
<<<<<<< Updated upstream
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';
=======
import {AdsService} from '../../Services/ads.service';
import {FilterAdsService} from '../../Services/filter-ads.service';
import {Ads} from '../../Models/Ads';
import {AppointmentService} from '../../Services/appointment.service';
import {Appointment} from '../../Models/Appointment';
>>>>>>> Stashed changes

@Component({
  selector: 'app-clientarea',
  templateUrl: './clientarea.component.html',
  styleUrls: ['./clientarea.component.css']
})
export class ClientareaComponent implements OnInit {

  ScriptElement: HTMLScriptElement;
  ScriptElement1: HTMLScriptElement;
  ScriptElement2: HTMLScriptElement;
  ScriptElement3: HTMLScriptElement;
<<<<<<< Updated upstream
  constructor(private service:LoginService,private router : Router){
    this.ScriptElement = document.createElement('script'); 
    this.ScriptElement.src = "../../../assets/js/main.js" ;
=======
  constructor(private adsservice: AdsService, private filterservice: FilterAdsService, private appservice: AppointmentService){
    this.ScriptElement = document.createElement('script');
    this.ScriptElement.src = '../../../assets/js/main.js' ;
>>>>>>> Stashed changes
    document.body.appendChild(this.ScriptElement);

    this.ScriptElement1 = document.createElement('script');
    this.ScriptElement1.src = '../../../assets/vendor/bootstrap/js/bootstrap.bundle.min.js' ;
    document.body.appendChild(this.ScriptElement1);

    this.ScriptElement2 = document.createElement('script');
    this.ScriptElement2.src = '../../../assets/vendor/php-email-form/validate.js' ;
    document.body.appendChild(this.ScriptElement2);

    this.ScriptElement3 = document.createElement('script');
    this.ScriptElement3.src = '../../../assets/vendor/swiper/swiper-bundle.min.js' ;
    document.body.appendChild(this.ScriptElement3);
   }

  // @ts-ignore
  App = new Appointment();
  // @ts-ignore
  Appdo = new Appointment(0, '', '', 0, '');
  adslistall: any[] = [];
  isShowDiv = false;
  adid = 0;
  ngOnInit(): void {
    this.adsservice.getAllAds().subscribe((data) => {
      console.log(data);
      this.adslistall = data; });
  }
  public filter(location: string, price: number , nbRooms: number, kindofgood: string){
    console.log(location);
    console.log(price);
    console.log(nbRooms);
    console.log(kindofgood);

<<<<<<< Updated upstream
  appLogout(){
    this.service.logoutUser();
    this.router.navigate(['/'])
  }

=======
    return this.filterservice.filterAds(location, price, nbRooms, kindofgood ).subscribe((data) => {
      console.log(data);
      this.adslistall = data; });
  }
  public Likes(adID: number){
    return this.adsservice.incrLikes(adID).subscribe((data) => {
      console.log(data);
      this.adslistall = data; });
  }

  public dislikes(adID: number){
    return this.adsservice.incrdislikes(adID).subscribe((data) => {
      console.log(data);
      this.adslistall = data; });
  }
  public GetAppointment(app: any, heur: number, adID: number){
    this.Appdo.date = app;
    this.Appdo.heure = heur;
    this.Appdo.state = '';
    this.Appdo.Attendence = '';
    return this.appservice.addnewapp(this.Appdo, adID);
  }
  toggleDisplayDiv(id: number){
    this.adid = id;
    this.isShowDiv = !this.isShowDiv;
    return this.adid;
  }
>>>>>>> Stashed changes
}
