import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Event } from 'src/app/shared/models/interfaces/event';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  baseURL: string = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  // RECUPERER LISTE EVENTS //
  getListeEvents(): Observable<Event[]>{
    return this.http.get<Event[]>(this.baseURL + "typeEvent")
  }

  // CREER EVENT
  newEVENT(event: Event): Observable<Event> {
    return this.http.post<Event>(this.baseURL + "event", event);
  }

}
