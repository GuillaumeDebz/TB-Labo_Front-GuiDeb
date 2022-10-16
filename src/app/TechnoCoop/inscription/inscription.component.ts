import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InscriptionFormProperties } from 'src/app/shared/models/enum/form-inscription-properties';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  public myForm!: FormGroup;

  public readonly inscriptionFormProperties = InscriptionFormProperties;     // Public = dispo en html

  constructor(
    private fb: FormBuilder
  ) {
    this.myForm = this.generateForm();
  }

  ngOnInit(): void {
  }

  private generateForm(): FormGroup {
    const myForm = this.fb.group({
      [InscriptionFormProperties.NOM]: [null, [Validators.minLength(6), Validators.required]],                      // 1er élem= valeur par défaut, 2ème = objet avec param (validators etc) //pas obligé de mettre validators (2eme elem)  
      // EMAIL: [null, [Validators.email, Validators.required]],
      // PASSWORD: [null, [Validators.required, Validators.minLength(6)]],
      // CONFIRMPASSWORD: [null, [Validators.required, Validators.minLength(6)]],

    })
    return myForm;
  }

}
