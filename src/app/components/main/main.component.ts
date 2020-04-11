import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

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
  username:string ;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  
    this.userService.getUser(sessionStorage.getItem("user")).subscribe(data =>{
      this.user = data;
    });

  }




}
