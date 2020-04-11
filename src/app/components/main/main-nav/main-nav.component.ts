import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  id:number;
  user : User = {
    id:null , 
    username:'',
    email:'',
    phone:'',
    password:'',
    address:{
      city:'',
      country:'',
      addressDet:''
    },
    role:'',
    active:0
  }
  show:boolean=false;
  constructor(private router:Router , private auth:AuthService , private userService:UserService) { }

  ngOnInit(): void {
    
    this.userService.getUser( sessionStorage.getItem("user")).subscribe(data =>{
      this.user = data;
    });
  }

  click(){
    this.show=!this.show;
  }
  logout(){
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
