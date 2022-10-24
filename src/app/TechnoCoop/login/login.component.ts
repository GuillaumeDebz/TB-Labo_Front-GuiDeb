import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginProperties } from 'src/app/shared/models/enum/login-properties';
import { LoginService } from 'src/app/shared/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Afficher/Cacher mot de passe
  public hide: boolean = true;

  // Création formulaire
  public formLogin: FormGroup

  // Enum Login
  loginProperties = LoginProperties   // dans une var pour pouvoir y accéder en html

  // Statut Login
  isConnect : boolean = false

  constructor(
    private fb: FormBuilder,
    private serviceLogin: LoginService
  ) {
    this.formLogin = this.generateForm();
  }

  ngOnInit(): void {
    this.isConnect = this.serviceLogin.isConnect
  }

  public generateForm(): FormGroup {
    const formLogin = this.fb.group({
      [LoginProperties.EMAIL]: [null, [Validators.required]],
      [LoginProperties.PASSWORD]: [null, [Validators.required]]
    },)
    return formLogin;
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