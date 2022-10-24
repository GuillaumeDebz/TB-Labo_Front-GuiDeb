import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Profile } from 'src/app/shared/models/interfaces/profile';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseURL: string = "http://localhost:3000/";

  isConnect : boolean = false

  constructor(private http: HttpClient) { }

  
  getInfoProfil(): Observable<Profile[]>{
    return this.http.get<Profile[]>(this.baseURL + "user")
  }


  login(){
    this.isConnect = true
    sessionStorage.setItem("isConnect", JSON.stringify(this.isConnect))
  }


  logout(){
    this.isConnect = false
    sessionStorage.setItem("isConnect", JSON.stringify(this.isConnect))
  }

}
