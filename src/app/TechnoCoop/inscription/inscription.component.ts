import { HttpClient } from '@angular/common/http';
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

  public show: boolean = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.myForm = this.generateForm();
  }

  public showPassword(){
    this.show = !this.show;
  }


  ngOnInit(): void {
  }

  private generateForm(): FormGroup {
    const myForm = this.fb.group({
      [InscriptionFormProperties.TYPE_PROFIL]: ["Particulier", [Validators.required]],
      [InscriptionFormProperties.NOM]: [null, [Validators.minLength(2), Validators.required]],                      // 1er élem= valeur par défaut, 2ème = objet avec param (validators etc) //pas obligé de mettre validators (2eme elem)  
      [InscriptionFormProperties.EMAIL]: [null, [Validators.email, Validators.required]],
      [InscriptionFormProperties.PASSWORD]: [null, [Validators.required, Validators.minLength(6), Validators.required]],
      [InscriptionFormProperties.CONFIRMPASSWORD]: [null, [Validators.required, Validators.minLength(6), Validators.required]],

    })
    return myForm;
  }

  private getTypesCoop() {
    return this.http.get("http://localhost:3000/typeCoop");
  }


  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;


//   private Afficher() {
//     let input = <HTMLInputElement> document.getElementById ("password");
  
//     if (input != null) {                  
//       if (input.type === "password") {
//         input.type = "text";
//       }
//       else {
//         input.type = "password";
//       }
//     }

//     return input.type
// }



}

// ESSAI JSON SERVER //

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];


