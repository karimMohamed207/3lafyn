import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { Message } from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {


  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<Message[]>('http://localhost:8081/messages')
  }

  addMessage(message:Message){
    
    return this.http.post<Message>('http://localhost:8081/messages'  ,  message );
  }

  deleteMessage(id:number){
    return this.http.delete(`http://localhost:8081/messages/${id}`);
  }

  getMessage(id:number){
    return this.http.get<Message>(`http://localhost:8081/messages/${id}`);
  }

  

}
