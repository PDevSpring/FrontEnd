<<<<<<< Updated upstream
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';
=======
import {Component, OnInit} from '@angular/core';
import {AdsService} from '../../Services/ads.service';
import {Ads, type} from '../../Models/Ads';
import { Observable } from 'rxjs';
import {AppointmentService} from '../../Services/appointment.service';
import {Appointment} from '../../Models/Appointment';
import {FilterAdsService} from '../../Services/filter-ads.service';

>>>>>>> Stashed changes

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {

  ScriptElement: HTMLScriptElement;
  ScriptElement1: HTMLScriptElement;
  ScriptElement2: HTMLScriptElement;
  ScriptElement3: HTMLScriptElement;
<<<<<<< Updated upstream
  constructor(private service:LoginService,private router : Router){
    this.ScriptElement = document.createElement('script'); 
    this.ScriptElement.src = "../../../assets/js/main.js" ;
=======

  constructor(private adsservice: AdsService, private appservice: AppointmentService, private filterservice: FilterAdsService){
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

  ads = new Ads(0, '', '', '', type.RENT, 0, 0, 0, 0, 0, 0, true, true, true, true, true, 0, 0, '');
  // adsselected = new Ads(0, '', '', '', type.RENT, 0, 0, 0, 0, 0, 0, true, true, true, true, true, 0, 0, '');
  adsselected?:Ads;
  adslistall: any[] = [];
  applist: Appointment[] = [];
  applistselected: Appointment[] = [];


  ngOnInit(): void {
     this.adsservice.getAllAds().subscribe((data) => {
     console.log(data);
     this.adslistall = data; });
     this.appservice.getAllApp().subscribe((data) => {
       console.log(data);
       this.applist = data;
     });
  }

  // tslint:disable-next-line:typedef
  public newad(ads: Ads, userid: number){
    return this.adsservice.newad(ads, userid).subscribe((res) => {
    });
  }
  onSelect(ad: Ads): void {
    this.adsselected = ad;

    this.getappbyad(this.adsselected.adID).subscribe((data) => {
      console.log(data);
      this.applistselected = data;
    });
  }
  public getappbyad(adid: number ){
    return this.appservice.getAllAppByiD(adid);
  }
  public DeleteApp (appointmentId: number){
    return this.appservice.Deleteapp(appointmentId).subscribe();
  }


  public deleteAdd(AdID: number){
    console.log('id,', AdID);
    return this.adsservice.deleteAddByID(AdID).subscribe((data) => {
      const index = this.adslistall.findIndex( a => a.idAd === AdID);
      this.adslistall.splice(index, 1); });
  }

  public findad(AdID: number){
    return this.adsservice.findbyId(AdID); }


  public Likes(AdID: number){
    return this.adsservice.incrLikes(AdID);
  }

  public dislikes(AdID: number){
    return this.adsservice.incrdislikes(AdID);

  }

  public nblikes(AdID: number){
    return this.adsservice.nboflikes(AdID);
  }

  public nbdislikes(AdID: number){
    return this.adsservice.nbofdislikes(AdID);
  }

  public mostliked(ads: Ads){
    return this.adsservice.mostlikedad(ads);
  }

  public alllikes(ads: Ads){
    return this.adsservice.alllikes(ads);
  }

  public alldislikes(ads: Ads){
    return this.adsservice.alldislikes(ads);
  }

  public updatead(ads: Ads, AdID: any){

    return this.adsservice.updateadid(ads, AdID).subscribe(); }

  public filter(location: string, price: number , nbRooms: number, kindofgood: string){
    console.log(location);
    console.log(price);
    console.log(nbRooms);
    console.log(kindofgood);

    return this.filterservice.filterAds(location, price, nbRooms, kindofgood ).subscribe((data) => {
      console.log(data);
      this.adslistall = data; });
  }

  appLogout(){
    this.service.logoutUser();
    this.router.navigate(['/'])
  }

}
