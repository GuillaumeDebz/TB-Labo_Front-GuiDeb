import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { profile } from 'src/app/shared/models/interfaces/profile';

@Injectable({
  providedIn: 'root'
})

export class TypesCoopService {

  baseURL: string = "http://localhost:3000/";

  constructor(private http: HttpClient) { }


  getTypesCoop(){
    return this.http.get(this.baseURL + "typeCoop")
  }

    // CREER PROFIL
    // newUser(type: string, name: string, email: string, password: string) {
    //   let temp : profile [type_profile: typeUser, name_profile: name, email_profile: email, password_profile: password];
  
    //   this.http.post<profile>(this.baseURL + "user", temp).subscribe();
    // }

}
