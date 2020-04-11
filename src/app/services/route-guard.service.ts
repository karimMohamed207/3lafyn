import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private auth:AuthService , private router:Router , private userService:UserService) { }

  canActivate(route:ActivatedRouteSnapshot , state:RouterStateSnapshot){
    if(this.auth.isUserLogin()){
      return true;
    }
      
    this.router.navigate(['/login']);
    return false;
  }


}


