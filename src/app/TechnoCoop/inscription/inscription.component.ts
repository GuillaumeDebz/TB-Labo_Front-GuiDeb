import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InscriptionFormProperties } from 'src/app/shared/models/enum/form-inscription-properties';
import { TypesCoopService } from 'src/app/shared/services/types-coop.service';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})

export class InscriptionComponent implements OnInit {

  // Formulaire
  public myForm!: FormGroup;
  public readonly inscriptionFormProperties = InscriptionFormProperties;     // Public = dispo en html

  // Afficher/Cacher mot de passe
  public hide: boolean = true;

  // Récupérer les types de data
  typesCoopData : any;
  displayedColumns: string[] = ['id', 'type'];

  // Status utilisateur
  statusUser : string = "Particulier"



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
      [InscriptionFormProperties.TYPE_PROFIL]: ["Particulier", [Validators.required]],
      [InscriptionFormProperties.NOM]: [null, [Validators.minLength(2), Validators.required]],                      // 1er élem= valeur par défaut, 2ème = objet avec param (validators etc) //pas obligé de mettre validators (2eme elem)  
      [InscriptionFormProperties.EMAIL]: [null, [Validators.email, Validators.required]],
      [InscriptionFormProperties.PASSWORD]: [null, [Validators.required, Validators.minLength(6)]],
      [InscriptionFormProperties.CONFIRMPASSWORD]: [null, [Validators.required, Validators.minLength(6)]],
    })
    return myForm;
  }


    // RECUPERER TYPES DE COOP DE LA DB
    private getTypesCoopData() {
      this.serviceCoop.getTypesCoop().subscribe((response) => {
        this.typesCoopData = response
      });
    }


  // AFFICHER TYPES DE COOP
  typeCoopSelectChange(){
    let displaySelectForm = document.getElementById("typeCoop")!

    if(displaySelectForm.style.display == "block")
    {
      displaySelectForm.style.display = "none"
      this.statusUser  = "particulier"
      console.log(this.statusUser);
    }
    else
    {
      displaySelectForm.style.display = "block"
      this.statusUser  = "coop"
      console.log(this.statusUser);
    }
  }




}

