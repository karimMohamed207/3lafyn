import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message.model';
import { MessageService } from 'src/app/services/message.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  latitude: 51.678418;
  longitude: 7.809007;

  mes:Message= {
    id:null,
    username:'' ,
    email:'',
    message:'',
    date:new Date()

  };
  message:string;



  constructor(private service:MessageService , private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
   
    this.service.addMessage(this.mes).subscribe(data => {
      this.message='';
      this.mes.message=null;
      this.mes.username=null;
      this.mes.email=null;
    }, error => {
      this.message = 'please Enter your data !';
    });
   
  }

  

}
