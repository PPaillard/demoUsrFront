import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SupportAuth';

  public mail:string
  public password:string

  constructor(private userService:UserService){}

  onSubmit(){
    // On 
    this.userService.checkUser(this.mail, this.password)
  }
}
