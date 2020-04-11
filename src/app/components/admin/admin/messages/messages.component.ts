import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { Message } from 'src/app/models/message.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'] , 
  providers:[MessageService]
})
export class MessagesComponent implements OnInit {

  messages:Message[];
  constructor(private messageService:MessageService , private router:Router) { }

  ngOnInit(): void {
    this.getAll();
    setTimeout(() => {
      location.reload();
    }, 10000);
  }
  getAll(){
      this.messageService.getAll().subscribe(data => {
        this.messages = data ;
      });
  }

  deleteMessage(id:number){
    console.log(id);
    this.messageService.deleteMessage(id).subscribe(data => {
      console.log('delete')
      this.getAll();
    });
    
    
  }


}
