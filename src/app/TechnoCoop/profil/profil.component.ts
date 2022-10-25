import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/shared/models/interfaces/profile';
import { ProfilService } from 'src/app/shared/services/profil.service';
import { LoginService } from 'src/app/shared/services/login.service';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  isConnect : boolean = false

  // AFFICHAGE PROFIL //
  displayedColumns: string[] = ['name', 'typeCoop', 'email', 'password'];
  listeCoopData : Profile[] = [];
  listeUser$: Observable<Profile[]>;

  constructor(
    private serviceProfil : ProfilService,
    private serviceLogin : LoginService
  ) {
    this.listeUser$ = this.serviceProfil.getInfoProfil(this.serviceLogin.connectedUser?.id);     
   }

  ngOnInit(): void {
    this.isConnect = this.serviceLogin.isConnect
  }


  logout(){
    this.serviceLogin.logout()
  }

}



