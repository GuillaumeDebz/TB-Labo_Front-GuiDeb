import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
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
    this.listeCoop$ = this.serviceListeCoop.getListeCoop().pipe(    // pipe = chq fois observable emet une valeur, on applique dessus une série d'opérateurs/de fct
      map(profileUser => profileUser.filter(profile => profile.typeCoop != null))   //Map = transforme, prend un [profil] et renvoie un [profil filtré] : filter prend en param une fct (booleen true = garde l'élement) sur chaque élément (sur chq profil du tableau) 
      );     
  }

  ngOnInit(): void {
  }

}

