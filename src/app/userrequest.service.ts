import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserrequestService {

  private url:string = "http://localhost:8080"

  constructor(private http : HttpClient){}

  checkUser(mail:string, password:string):Observable<any>{
    let obs:Observable<any> = this.http.get(`${this.url}/checkuser?mail=${mail}&password=${password}`)
    const  treatment  = ( retour:any) => {
      return  retour  as  User;
    };

    return  obs.pipe( map( treatment) );
  }
}
