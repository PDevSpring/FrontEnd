import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoginRequest } from 'src/app/Models/loginRequest';
import { Token } from 'src/app/Models/token';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginRequest:LoginRequest=new LoginRequest("","");
  token :Token = new Token("")  ;
  res:any={}; 

  ScriptElement: HTMLScriptElement;
  ScriptElement1: HTMLScriptElement;
  ScriptElement2: HTMLScriptElement;
  ScriptElement3: HTMLScriptElement;
  constructor(private service:LoginService, private router : Router, private cookie:CookieService){
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

  }

  appLogin(){
    this.service.loginUser(this.loginRequest).subscribe(res => { 
      this.cookie.set('token',res.jwt);
      this.service.getUserDetails(this.cookie.get('token')).subscribe(data => {
        if ((data.enabled) && (data.role==="Client")) {
          this.router.navigate(['/Session/Connected!0/Home']);
        }
        if ((data.enabled) && (data.role==="Admin")) {
          this.router.navigate(['/Session/Connected!1/Home']);
        }
      } )
        
    },
    err => console.log(err)
    )
  
    
  }

/*  parseObject(obj:any)
{
   for(var key in obj)
   {
      return (obj[key])
   }
}*/


}
