import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContentComponent } from './components/content/content.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/register/register.component';
import { IndivualComponent } from './components/register/indivual/indivual.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ErrorComponent } from './components/error/error.component';
import { RouteGuardService } from './services/route-guard.service';
import { MessagesComponent } from './components/admin/admin/messages/messages.component';
import { AdminComponent } from './components/admin/admin/admin.component';
import { UsersComponent } from './components/admin/admin/users/users.component';
import { FristPageComponent } from './components/frist-page/frist-page.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { MyAccountComponent } from './components/main/my-account/my-account.component';


const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"home", component:FristPageComponent},  
  {path:"contect-us" , component:ContentComponent},
  {path:"pricing" , component:PricingComponent},
  {path:"login" , component:LoginComponent},
  {path:"welcome" , component:MainComponent , canActivate:[RouteGuardService]},
  {path:"register" , component:RegisterComponent},
  {path:"register/individual" , component:IndivualComponent},
  {path:"logout" , redirectTo:"login"},
  {path:"welcome/admin" , component:AdminComponent , canActivate:[RouteGuardService]},
  {path:"users" , component:UsersComponent , canActivate:[RouteGuardService] },
  {path:"messages" , component:MessagesComponent , canActivate:[RouteGuardService]},
  {path:"terms-conditions" , component:PrivacyComponent},
  {path:":name" , component:MyAccountComponent , canActivate:[RouteGuardService]},
  {path:"**" , component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
