import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isConnect : boolean = false

  constructor() { }

  login(){
    this.isConnect = true
    sessionStorage.setItem("isConnect", JSON.stringify(this.isConnect))
  }


  logout(){
    this.isConnect = false
    sessionStorage.setItem("isConnect", JSON.stringify(this.isConnect))
  }

}
