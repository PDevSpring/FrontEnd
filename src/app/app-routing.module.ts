import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AccountsettComponent } from './components/accountsett/accountsett.component';
import { AccountssettingsComponent } from './components/accountssettings/accountssettings.component';
import { AdminadsComponent } from './components/adminads/adminads.component';
import { AdminareaComponent } from './components/adminarea/adminarea.component';
import { AdminforumComponent } from './components/adminforum/adminforum.component';
import { AdminmessagesComponent } from './components/adminmessages/adminmessages.component';
import { AdminprofilsettComponent } from './components/adminprofilsett/adminprofilsett.component';
import { AdsComponent } from './components/ads/ads.component';
import { BanksettingsComponent } from './components/banksettings/banksettings.component';
import { ClientareaComponent } from './components/clientarea/clientarea.component';
import { ContactComponent } from './components/contact/contact.component';
import { ForumComponent } from './components/forum/forum.component';
import { GetstartedComponent } from './components/getstarted/getstarted.component';
import { HomeComponent } from './components/home/home.component';
import { LoadingComponent } from './components/loading/loading.component';
import { LoginComponent } from './components/login/login.component';
import { MessagesComponent } from './components/messages/messages.component';
import { VerificationComponent } from './components/verification/verification.component';
import { VisitfurnitureComponent } from './components/visitfurniture/visitfurniture.component';
import { VisithousesComponent } from './components/visithouses/visithouses.component';
import {AgentconfirmComponent} from './components/agent/agentconfirm/agentconfirm.component';
import {SimulateComponent} from './components/simulate/simulate.component';
import {FournituresareaComponent} from './components/fournituresarea/fournituresarea.component';
import {ShoopingcardComponent} from './components/shoopingcard/shoopingcard.component';
import {OrderComponent} from './components/order/order.component';
import {ClientfournitureownerComponent} from './components/clientfournitureowner/clientfournitureowner.component';

const routes: Routes = [
<<<<<<< HEAD
  {path: '', component: HomeComponent},
  {path: 'About', component: AboutComponent},
  {path: 'Contact', component: ContactComponent},
  {path: 'FurnitureModels', component: VisitfurnitureComponent},
  {path: 'HousesModels', component: VisithousesComponent},
  {path: 'Getstarted/Register', component: GetstartedComponent},
  {path: 'Getstarted/Login', component: LoginComponent},
  {path: 'Session/Connected!0/Home', component: ClientareaComponent},
  {path: 'Session/Connected!0/Home/Simulate', component: SimulateComponent},
  {path: 'Session/Connected!0/Home/Ads', component: AdsComponent},
  {path: 'Session/Connected!0/Home/Shoppingcard', component: ShoopingcardComponent},
  {path: 'Session/Connected!0/Home/Furniture', component: FournituresareaComponent},
  {path: 'Session/Connected!0/Home/Profil/Messages', component: MessagesComponent},
  {path: 'Session/Connected!0/Home/Profil/Froum', component: ForumComponent},
  {path: 'Session/Connected!0/Home/Profil/AccountSettings', component: AccountsettComponent},
  {path: 'Session/Connected!1/Home', component: AdminareaComponent},
  {path: 'Session/Connected!1/Home/Orders', component: OrderComponent},
  {path: 'Session/Connected!1/Home/Myorders', component: ClientfournitureownerComponent},

  {path: 'Session/Connected!1/Home/Ads', component: AdminareaComponent},
  {path: 'Session/Connected!1/Home/Profil/Messages', component: AdminmessagesComponent},
  {path: 'Session/Connected!1/Home/Profil/Froum', component: AdminforumComponent},
  {path: 'Session/Connected!1/Home/Profil/AccountsSettings', component: AccountssettingsComponent},
  {path: 'Session/Connected!1/Home/Profil/AccountSettings', component: AdminprofilsettComponent},
  {path: 'Session/Connected!1/Home/BanksSettings', component: BanksettingsComponent},
  {path: 'Session/Connected!1/Home/Agent/Confirm', component: AgentconfirmComponent}

=======
  {path:'', component:HomeComponent},
  {path:'About', component:AboutComponent},
  {path:'Contact', component:ContactComponent},
  {path:'FurnitureModels', component:VisitfurnitureComponent},
  {path:'HousesModels', component:VisithousesComponent},
  {path:'Getstarted/Register', component:GetstartedComponent},
  {path:'Getstarted/Login', component:LoginComponent},
  {path:'Session/Connected!0/Home', component:ClientareaComponent},
  {path:'Session/Connected!0/Home/Simulate', component:SimulateComponent},
  {path:'Session/Connected!0/Home/Ads', component:AdsComponent},
  {path:'Session/Connected!0/Home/Furniture', component:FournituresareaComponent},
  {path:'Session/Connected!0/Home/Profil/Messages', component:MessagesComponent},
  {path:'Session/Connected!0/Home/Profil/Froum', component:ForumComponent},
  {path:'Session/Connected!0/Home/Profil/AccountSettings', component:AccountsettComponent},
  {path:'Session/Connected!1/Home', component:AdminareaComponent},
  {path:'Session/Connected!1/Home/Ads', component:AdminareaComponent},
  {path:'Session/Connected!1/Home/Profil/Messages', component:AdminmessagesComponent},
  {path:'Session/Connected!1/Home/Profil/Froum', component:AdminforumComponent},
  {path:'Session/Connected!1/Home/Profil/AccountsSettings', component:AccountssettingsComponent},
  {path:'Session/Connected!1/Home/Profil/AccountSettings', component:AdminprofilsettComponent},
  {path:'Session/Connected!1/Home/BanksSettings', component:BanksettingsComponent},
  {path:'Getstarted/Register/AccountVerified', component:VerificationComponent},
  {path:'LoadingWait',component:LoadingComponent}
>>>>>>> 83ecc39c9057b26e496e0f176cf9d5a1141777c6
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
