import { Injectable } from '@angular/core';
import { User } from './user.model';
import { UserrequestService } from './userrequest.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userConnected:User|undefined;

  constructor(private userService:UserrequestService) { }

  checkUser(mail:string, password:string){
    this.userService.checkUser(mail,password).subscribe(
      (data:User)=> {
        this.userConnected = data;
        if(this.userConnected != null) {
          console.log(this.userConnected.toString());
        }
      }
    )
  }
}
