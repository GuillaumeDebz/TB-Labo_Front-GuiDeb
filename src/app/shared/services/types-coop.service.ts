import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from 'src/app/shared/models/interfaces/profile';
import { TypeCoop } from '../models/interfaces/typeCoop';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class TypesCoopService {

  baseURL: string = "http://localhost:3000/";

  constructor(private http: HttpClient) { }


  getTypesCoop(): Observable<TypeCoop[]>{
    return this.http.get<TypeCoop[]>(this.baseURL + "typeCoop")
  }

    // CREER PROFIL
    newUser(profil: Profile): Observable<Profile> {
      return this.http.post<Profile>(this.baseURL + "user", profil);
    }

}
