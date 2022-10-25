import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs'
import { Profile } from 'src/app/shared/models/interfaces/profile';


@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  baseURL: string = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  getInfoProfil(id: number): Observable<Profile[]>{
    return this.http.get<Profile>(this.baseURL + "user/" + id).pipe(map(profil => [profil]))
  }

}


