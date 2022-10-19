import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InscriptionFormProperties } from 'src/app/shared/models/enum/form-inscription-properties';
import { TypesCoopService } from 'src/app/shared/services/types-coop.service';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})

export class InscriptionComponent implements OnInit {

  // Formulaire
  public myForm: FormGroup;
  public readonly inscriptionFormProperties = InscriptionFormProperties;     // Public = dispo en html

  // Type utilisateur
  isCoop : boolean = false;

  // Récupérer les types de data
  typesCoopData : any;
  displayedColumns: string[] = ['id', 'type'];

  // Afficher/Cacher mot de passe
  public hide: boolean = true;

  // Envoyer les données
  typeUser: string = ""
  name: string = ""
  email: string = ""
  password: string = ""



  constructor(
    private fb: FormBuilder,
    private serviceCoop: TypesCoopService
  ) {
    this.myForm = this.generateForm();
  }

  // Afficher/Cacher mot de passe V2
  // public show: boolean = false;
  // public showPassword(){
  //   this.show = !this.show;
  // }


  ngOnInit(): void {
    this.getTypesCoopData()
  }


  // FORMULAIRE
  private generateForm(): FormGroup {
    const myForm = this.fb.group({
      [InscriptionFormProperties.TYPE_USER]: [null, [Validators.required]],
      [InscriptionFormProperties.NOM]: [null, [Validators.minLength(2), Validators.required]],                      // 1er élem= valeur par défaut, 2ème = objet avec param (validators etc) //pas obligé de mettre validators (2eme elem)  
      [InscriptionFormProperties.EMAIL]: [null, [Validators.email, Validators.required]],
      [InscriptionFormProperties.PASSWORD]: [null, [Validators.required, Validators.minLength(6)]],
      [InscriptionFormProperties.CONFIRMPASSWORD]: [null, [Validators.required, Validators.minLength(6)]],
    })
    return myForm;
  }


  // AFFICHER TYPES DE COOP SI COOPERATIVE
  AfficherTypesCoop(type: boolean){
    this.isCoop = type
  }

  // RECUPERER TYPES DE COOP DEPUIS LA DB
  private getTypesCoopData() {
    this.serviceCoop.getTypesCoop().subscribe((response) => {
      this.typesCoopData = response
    });
  }

  // CREER PROFIL
  // createProfile(){
  // this.serviceCoop.newUser(this.typeUser, this.name, this.email, this.password)
  // }


}