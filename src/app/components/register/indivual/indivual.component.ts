import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { Email } from 'src/app/models/Email.model';

@Component({
  selector: 'app-indivual',
  templateUrl: './indivual.component.html',
  styleUrls: ['./indivual.component.css']
})
export class IndivualComponent implements OnInit {

  user:User = {
    id:null , 
    username:'',
    email:'',
    password:'',
    phone:'',
    address:{
    city:'',
    country:'',
    addressDet:''
    },
    role:"ROLE_USER",
    active:0
  }
  email:Email={
    to:this.user.email,
    subject:'Hi man',
    body:'kokokoko the code is 123444'
  }
  conPass:string;
  active:boolean=false;
  page:boolean=false;
  message:boolean = false;
  error:boolean=false;
  code:string;
  showCode:boolean=false;

  constructor(private userService:UserService , private router:Router) { }

  ngOnInit(): void {
  }

  next(){
    this.page = !this.page;
  }
  

  createAccount(user){
    this.sendEmail();
      this.showCode=true;
  }

  sendEmail(){
    this.userService.sendEmail(this.email).subscribe(data => {
      
      console.log("done man");
    })
  }

  saveAccount(){
    if(this.code === '123456'){
      this.showCode = false ;
      this.userService.createUser(this.user).subscribe(data => {
        this.user = data;
        this.error=true;
        setTimeout(() => {
          this.error=false;
          this.router.navigate(['/login']);
        }, 5000);
      });
    }else{
      this.code = null ;
    }
  }

}
