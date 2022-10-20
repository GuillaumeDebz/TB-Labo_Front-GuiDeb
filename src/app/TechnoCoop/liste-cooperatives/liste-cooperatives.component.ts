import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/shared/models/interfaces/profile';
import { ListeCoopService } from 'src/app/shared/services/liste-coop.service';


@Component({
  selector: 'app-liste-cooperatives',
  templateUrl: './liste-cooperatives.component.html',
  styleUrls: ['./liste-cooperatives.component.css']
})
export class ListeCooperativesComponent implements OnInit {

  displayedColumns: string[] = ['name', 'typeCoop'];
  listeCoopData : Profile[] = [];
  listeCoop$: Observable<Profile[]>;


  constructor(
    private serviceListeCoop : ListeCoopService
  ) { 
    this.listeCoop$ = this.serviceListeCoop.getListeCoop();     
  }

  ngOnInit(): void {
  }

}

