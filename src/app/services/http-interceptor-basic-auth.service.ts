import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor{

  constructor(private auth:AuthService) { }
 
  intercept(request:HttpRequest<any> , next:HttpHandler){
    // let username = 'karim';
    // let password = 'koko';
    // let basicHeader = 'Basic '+ window.btoa(username + ':' + password);
    let basicHeader = this.auth.getAuthcationToken();
    let user = this.auth.getAuthcationUser();

    if(basicHeader && user ){

      request = request.clone({
        setHeaders:{
          Authorization: basicHeader
        }
      })
    }
    return next.handle(request);
  }

}
