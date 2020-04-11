import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:User;
  constructor(private userServices:UserService , private router:Router , private http:HttpClient) { }

  excuteJWTAuthenticationServices(username , password){
   
    return this.http.post<any>(`http://localhost:8081/sigin` ,{username , password}).pipe(
      map(
        data => {
          sessionStorage.setItem("user" , username);
          sessionStorage.setItem("token" , `Bearer ${data.token}`);
          
          return data;
        }
      )
    );
  }  

excuteAuthenticationServices(username , password){
  let basicHeader = 'Basic '+ window.btoa(username + ':' + password);
  let headers = new HttpHeaders({
    Authorization: basicHeader
  });
  return this.http.get<User>(`http://localhost:8081/users/${username}/${password}` , {headers}).pipe(
    map(
      data => {
        sessionStorage.setItem("user" , username);
        sessionStorage.setItem("token" , basicHeader);
        return data;
      }
    )
  );
}
getAuthcationUser(){
  return sessionStorage.getItem("user");
}
getAuthcationToken(){
  if(this.getAuthcationUser())
    return sessionStorage.getItem("token");
}

isUserLogin(){
  let u = sessionStorage.getItem("user");
  return !(u === null);
}
logout(){
  sessionStorage.removeItem("user");
  sessionStorage.removeItem("token");
}

}
