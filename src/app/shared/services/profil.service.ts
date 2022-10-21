import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Profile } from 'src/app/shared/models/interfaces/profile';


@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  baseURL: string = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  getInfoProfil(): Observable<Profile[]>{
    return this.http.get<Profile[]>(this.baseURL + "user")
  }

}


