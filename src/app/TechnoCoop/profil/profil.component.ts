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

  displayedColumns: string[] = ['name', 'typeCoop', 'email', 'password'];
  listeCoopData : Profile[] = [];
  listeCoop$: Observable<Profile[]>;

  constructor(
    private serviceProfil : ProfilService,
    private serviceLogin : LoginService
  ) {
    this.listeCoop$ = this.serviceProfil.getInfoProfil();     
   }

  ngOnInit(): void {
    this.isConnect = this.serviceLogin.isConnect
  }

  login(){
    this.serviceLogin.login()
    this.isConnect = this.serviceLogin.isConnect
  }

  logout(){
    this.serviceLogin.logout()
    this.isConnect = this.serviceLogin.isConnect
  }

}



