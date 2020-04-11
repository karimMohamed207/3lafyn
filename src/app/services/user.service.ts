import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { Email } from '../models/Email.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUserByEmailAndPassword(email:string , password:string){
    return this.http.get<User>(`http://localhost:8081/users/${email}/${password}` );
  }

  createUser(user:User){
    return this.http.post<User>(`http://localhost:8081/users/reg` , user );
  }

  getUser(email:string){
    return this.http.get<User>(`http://localhost:8081/users/${email}` );
  }

  deleteUser(id:number){
    return this.http.delete(`http://localhost:8081/users/${id}` );
  }

  getAll(){
    return this.http.get<User[]>(`http://localhost:8081/users`);
  }

  updateUser(email:string , user:User){
    return this.http.put<User>(`http://localhost:8081/users/${email}` , user );
  }

  sendEmail(email:Email){
    return  this.http.post<Email>(`http://localhost:8081/sendMail` , email );
  }
}
