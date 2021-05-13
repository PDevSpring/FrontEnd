import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { VisithousesComponent } from './components/visithouses/visithouses.component';
import { VisitfurnitureComponent } from './components/visitfurniture/visitfurniture.component';
import { ContactComponent } from './components/contact/contact.component';
import { GetstartedComponent } from './components/getstarted/getstarted.component';
import { LoginComponent } from './components/login/login.component';
import { ClientareaComponent } from './components/clientarea/clientarea.component';
import { AdminareaComponent } from './components/adminarea/adminarea.component';
import { AdsComponent } from './components/ads/ads.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ForumComponent } from './components/forum/forum.component';
import { AccountsettComponent } from './components/accountsett/accountsett.component';
import { AdminadsComponent } from './components/adminads/adminads.component';
import { AccountssettingsComponent } from './components/accountssettings/accountssettings.component';
import { AdminmessagesComponent } from './components/adminmessages/adminmessages.component';
import { AdminprofilsettComponent } from './components/adminprofilsett/adminprofilsett.component';
import { AdminforumComponent } from './components/adminforum/adminforum.component';
import { LoginService } from './Services/login.service';
import { ResgisterService } from './Services/resgister.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BanksettingsComponent } from './components/banksettings/banksettings.component';
import { CookieService } from 'ngx-cookie-service';
import { VerificationComponent } from './components/verification/verification.component';
import { LoadingComponent } from './components/loading/loading.component';
import { UserserviceService } from './Services/userservice.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import {LoansServiceService} from './Services/loans-service.service';
import {BankServiceService} from './Services/bank-service.service';
import {ShoppingServiceService} from './Services/shopping-service.service';
import { AgentconfirmComponent } from './components/agent/agentconfirm/agentconfirm.component';
import { SimulateComponent } from './components/simulate/simulate.component';
import { FournituresareaComponent } from './components/fournituresarea/fournituresarea.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    VisithousesComponent,
    VisitfurnitureComponent,
    ContactComponent,
    GetstartedComponent,
    LoginComponent,
    ClientareaComponent,
    AdminareaComponent,
    AdsComponent,
    MessagesComponent,
    ForumComponent,
    AccountsettComponent,
    AdminadsComponent,
    AccountssettingsComponent,
    AdminmessagesComponent,
    AdminprofilsettComponent,
    AdminforumComponent,
    BanksettingsComponent,
    VerificationComponent,
    LoadingComponent,
    AgentconfirmComponent,
    SimulateComponent,
    FournituresareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule
  ],
  providers: [ResgisterService,LoginService,CookieService,UserserviceService, LoansServiceService, BankServiceService, ShoppingServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
