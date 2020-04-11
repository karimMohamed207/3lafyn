import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { ContentComponent } from './components/content/content.component';
import { MessageService } from './services/message.service';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserService } from './services/user.service';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/register/register.component';
import { IndivualComponent } from './components/register/indivual/indivual.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ErrorComponent } from './components/error/error.component';
import { LogoutComponent } from './components/logout/logout.component';
import { MainNavComponent } from './components/main/main-nav/main-nav.component';
import { HttpInterceptorBasicAuthService } from './services/http-interceptor-basic-auth.service';
import { MessagesComponent } from './components/admin/admin/messages/messages.component';
import { AdminNavComponent } from './components/admin/admin/admin-nav/admin-nav.component';
import { AdminComponent } from './components/admin/admin/admin.component';
import { UsersComponent } from './components/admin/admin/users/users.component';
import { FristPageComponent } from './components/frist-page/frist-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { MyAccountComponent } from './components/main/my-account/my-account.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ContentComponent,
    LoginComponent,
    MainComponent,
    RegisterComponent,
    IndivualComponent,
    PricingComponent,
    ErrorComponent,
    LogoutComponent,
    MainNavComponent,
    MessagesComponent,
    AdminNavComponent,
    AdminComponent,
    UsersComponent,
    FristPageComponent,
    FooterComponent,
    PrivacyComponent,
    MyAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyBKVyP3w_ayBOQUsEyzOMJI6k-AlQxG0Ic'
    })  
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS , useClass:HttpInterceptorBasicAuthService , multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
