import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { UserInfos } from 'src/app/Models/UserInfos';
import { LoginService } from 'src/app/Services/login.service';
import { UserserviceService } from 'src/app/Services/userservice.service';

@Component({
  selector: 'app-accountssettings',
  templateUrl: './accountssettings.component.html',
  styleUrls: ['./accountssettings.component.css']
})
export class AccountssettingsComponent implements OnInit {

  userinfos:UserInfos[] = [] ; 
  userName:any;
  user:User = new User("","","","",""); 
  userslist:boolean=true; 
  userselected:UserInfos = new UserInfos(0,"","","","","","");
  addadm:boolean=false; 
  id:number=0; 

  ScriptElement: HTMLScriptElement;
  ScriptElement1: HTMLScriptElement;
  ScriptElement2: HTMLScriptElement;
  ScriptElement3: HTMLScriptElement;
  constructor(private service:LoginService,private serviceu:UserserviceService,private router : Router){
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
   this.getallusers();
  }


  getallusers(){
    this.serviceu.getAllUsers().subscribe(res => {
      this.userinfos=res; 
    })
  }

  filter(){
    if(this.userName == ""){
    this.ngOnInit();
    }else{
      this.userinfos = this.userinfos.filter(res => {
        console.log(this.userinfos);
        return res.userName.toLocaleLowerCase().match(this.userName.toLocaleLowerCase());
      });
    }
  }

  regadminclick(){
    this.userslist = !this.userslist;
    this.addadm = !this.addadm;
  }

  registeradmin(){
    this.serviceu.addAdmin(this.user).subscribe(res =>{
      console.log(res); 
    })
  }
  
  appLogout(){
    this.service.logoutUser();
    this.router.navigate(['/'])
  }

  selected(user:UserInfos):void{
    this.userselected=user;
  }

  deleteacc(){
    this.serviceu.deleteUser(this.userselected.id).subscribe(res => {
      console.log(res);
    });
  }

}
