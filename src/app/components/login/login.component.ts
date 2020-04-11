import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //----------------- Attributes ----------------------
  
      //---------- field used to login --------------------
      email:string;
      password:string;
      
      //------------------ user which getten --------------
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

      id:number;
      error: string;
  constructor(private userService:UserService , private router:Router , private auth:AuthService ) { }

  ngOnInit(): void {
  }

  getUserByEmailAndPassword2(){
    
    this.auth.excuteJWTAuthenticationServices(this.email , this.password).subscribe(data =>{
      this.userService.getUser(this.email).subscribe(data => {
        console.log(data.role);
        if(data.role === "ROLE_USER"){
          this.router.navigate(['/welcome']);
        }else if(data.role === "ROLE_ADMIN"){
          this.router.navigate(['/welcome/admin']);
        }
      });
    },error => {
      this.error = "Invalid User";
      this.email=null;
      this.password=null; 
      setTimeout(() => {
        this.error=null;
      }, 5000);
    });
     
     
  }


}
