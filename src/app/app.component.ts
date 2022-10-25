import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LaboAngularGDE';

  // AFFICHAGE "MENU"
  menuAffiche= true;
  textMenu= "";

  // AFFICHER "MON COMPTE"
  monCompteAffiche= true;
  textMonCompte= "";


  constructor() {
  }

  afficherMenu(showMenu: boolean) {
    this.menuAffiche = !showMenu

    if (!this.menuAffiche) {
      this.textMenu= "👈🏻​​ Menu​"
    }
  }


  afficherMonCompte(showCompte: boolean) {
    this.monCompteAffiche = !showCompte

    if (!this.monCompteAffiche) {
      this.textMonCompte = "Mon compte"
    }
  }

}
