import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserInfos } from 'src/app/Models/UserInfos';
import { LoginService } from 'src/app/Services/login.service';
import { UserserviceService } from 'src/app/Services/userservice.service';

@Component({
  selector: 'app-adminprofilsett',
  templateUrl: './adminprofilsett.component.html',
  styleUrls: ['./adminprofilsett.component.css']
})
export class AdminprofilsettComponent implements OnInit {

  
  user:UserInfos = new UserInfos(0,"","","","","","");
  id:number = 0 ;  
  change:boolean = false ; 
  newpass:any="";
  currentpass:string=""; 

  ScriptElement: HTMLScriptElement;
  ScriptElement1: HTMLScriptElement;
  ScriptElement2: HTMLScriptElement;
  ScriptElement3: HTMLScriptElement;
  constructor(private service:LoginService,private router : Router, private cookie:CookieService,private serviceu: UserserviceService){
    this.ScriptElement = document.createElement('script'); 
    this.ScriptElement.src = "../../../assets/js/main.js" ;
    document.body.appendChild(this.ScriptElement);

    this.ScriptElement1 = document.createElement('script'); 
    this.ScriptElement1.src = "../../../assets/vendor/bootstrap/js/bootstrap.bundle.min.js" ;
    document.body.appendChild(this.ScriptElement1);

    this.ScriptElement2 = document.createElement('script'); 
    this.ScriptElement2.src = "../../../assets/vendor/php-email-form/validate.js" ;
    document.body.appendChild(this.ScriptElement2);

    this.ScriptElement3 = document.createElement('script'); 
    this.ScriptElement3.src = "../../../assets/vendor/swiper/swiper-bundle.min.js" ;
    document.body.appendChild(this.ScriptElement3);
  }

  ngOnInit(): void {
    this.getuserdata();
  }

  appLogout(){
    this.service.logoutUser();
    this.router.navigate(['/']);
  }

  getuserdata(){
    this.service.getUserDetails(this.cookie.get('token')).subscribe(data =>{
      this.user.id=data.id; 
      this.user.firstName=data.firstName; 
      this.user.lastName=data.lastName; 
      this.user.email=data.email; 
      this.user.userName=data.userName;
      this.user.password=data.password; 
      this.user.image=data.image;
      console.log(this.user);
    })
  }

  passchange(){
    this.change = !this.change ; 
  }
  

  AccSett(){
      if (this.newpass==""){
        this.user.password=this.user.password ; 
        this.serviceu.updateUser(this.user).subscribe(res => {
          console.log(res);   })
      }else{
        this.user.password=this.newpass;
        this.serviceu.updateUserpass(this.user).subscribe(res => {
          console.log(res);   })
      }    
      
    
    
  }

}
