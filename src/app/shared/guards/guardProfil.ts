import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  
  isConnect : boolean = false

  constructor(private loginServe : LoginService, private router : Router){
  }
  
  canActivate(): Observable<boolean> | boolean {
    this.isConnect = this.loginServe.isConnect

    if(this.isConnect)
      return true
    else{
      this.router.navigate(["/compo/login"])
      return false
    }
  }

}
