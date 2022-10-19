import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class TypesCoopService {

  constructor(private http: HttpClient) { }


  getTypesCoop(){
    return this.http.get("http://localhost:3000/typeCoop")
  }

}
