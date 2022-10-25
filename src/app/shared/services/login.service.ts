import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs'
import { Profile } from 'src/app/shared/models/interfaces/profile';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseURL: string = "http://localhost:3000/";

  isConnect: boolean = false
  connectedUser: Profile | null = null

  constructor(
    private http: HttpClient,
    private routeur: Router) { }


  getInfoProfil(): Observable<Profile[]> {
    return this.http.get<Profile[]>(this.baseURL + "user")
  }


  login(email: string, password: string): Observable<boolean> {
    let params = new HttpParams();
    params.set("email", email)        //query params
    params.set("password", password)

    return this.http.get<Profile[]>(this.baseURL + "user", { params: params }).pipe(
      map((profiles: Profile[]) => {
        if (profiles.length) {
          this.isConnect = true
          this.connectedUser = profiles[0]
          localStorage.setItem("connectedUser", JSON.stringify(profiles[0]))
          return true
        }
        return false;
      })
    )
  }


  logout() {
    this.isConnect = false
    this.connectedUser = null
    localStorage.removeItem("connectedUser")
    this.routeur.navigate(["compo", "login"])
  }

}
