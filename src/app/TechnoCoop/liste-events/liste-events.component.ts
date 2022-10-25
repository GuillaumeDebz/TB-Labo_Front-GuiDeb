import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs'



// Service
import { EventService } from 'src/app/shared/services/event.service';

// Enum
import { EventsProperties } from 'src/app/shared/models/enum/event-properties';

// Interfaces
import { Event } from 'src/app/shared/models/interfaces/event';

@Component({
  selector: 'app-liste-events',
  templateUrl: './liste-events.component.html',
  styleUrls: ['./liste-events.component.css']
})
export class ListeEventsComponent implements OnInit {

  // Formulaire
  public myEventForm: FormGroup;
  public readonly eventsProperties = EventsProperties; 


  displayedColumns: string[] = ['type', 'name', 'date', 'lieu', 'description'];
  listeEventData : Event[] = [];
  listeEvents$: Observable<Event[]>;


  constructor(
    private fb: FormBuilder,
    private serviceEvent: EventService
  ) { 
    this.myEventForm = this.generateForm();
    this.listeEvents$ = this.serviceEvent.getListeEvents();     
  }

  ngOnInit(): void { 
  }

  // FORMULAIRE EVENEMENTS //
  private generateForm(): FormGroup {
    const myEventForm = this.fb.group({
      [EventsProperties.TYPE]: ["Soirées de dégustation", [Validators.required,]],       
      [EventsProperties.NOM]: [null, [Validators.minLength(2), Validators.required,]],       
      [EventsProperties.DATE]: [new Date(), [Validators.required]],
      [EventsProperties.LIEU]: [null, [Validators.required]],
      [EventsProperties.DESCRIPTION]: [null],
    },)
    return myEventForm;
  }


  // CREATION EVENEMENTS DANS LA DB //
  createEvent(){
    const newEvent : Event = {
    type: this.myEventForm.get(EventsProperties.TYPE)?.value,  
    name: this.myEventForm.get(EventsProperties.NOM)?.value,
    date: this.myEventForm.get(EventsProperties.DATE)?.value,
    lieu: this.myEventForm.get(EventsProperties.LIEU)?.value,
    description: this.myEventForm.get(EventsProperties.DESCRIPTION)?.value,
    }
    
    // this.serviceEvent.newEVENT(newEvent).subscribe(response => console.log(response)
    // )
  }

}
