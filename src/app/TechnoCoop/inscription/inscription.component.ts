import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InscriptionFormProperties } from 'src/app/shared/models/enum/form-inscription-properties';
import { TypesCoopService } from 'src/app/shared/services/types-coop.service';
import { Subject, Observable } from 'rxjs'
import { takeUntil } from 'rxjs/operators'
import { ObserversModule } from '@angular/cdk/observers';
import { TypeCoop } from 'src/app/shared/models/interfaces/typeCoop';
import { Profile } from 'src/app/shared/models/interfaces/profile';
import { TypeProfil } from 'src/app/shared/models/enum/type-profil';



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
  isCoop = false;
  typeProfil = TypeProfil

  // Récupérer les types de data
  // typesCoopData : TypeCoop[] = [];
  // displayedColumns: string[] = ['id', 'type'];

  // Afficher/Cacher mot de passe
  public hide: boolean = true;

  // Envoyer les données
 

  // Subject    ==> $ à la fin: bonne pratique
  destroy$ = new Subject<void>()

  //Async
  typeCoop$: Observable<TypeCoop[]>;

  constructor(
    private fb: FormBuilder,
    private serviceCoop: TypesCoopService
  ) {
    this.myForm = this.generateForm();
    this.typeCoop$ = this.serviceCoop.getTypesCoop();   // observable que le service return = abrégé de this.service.méthode
  }

  // Afficher/Cacher mot de passe V2
  // public show: boolean = false;
  // public showPassword(){
  //   this.show = !this.show;
  // }

  ngOnInit(): void {
    // this.getTypesCoopData()
    this.myForm.get(InscriptionFormProperties.TYPE_USER)?.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((type_user: TypeProfil) => {
      if (type_user === TypeProfil.PARTICULIER) {
        this.myForm.get(InscriptionFormProperties.TYPE_COOP)?.setValue(null)
        this.myForm.get(InscriptionFormProperties.TYPE_COOP)?.clearValidators()
      }else {
        this.myForm.get(InscriptionFormProperties.TYPE_COOP)?.setValue("Agriculture et horticulture")
        this.myForm.get(InscriptionFormProperties.TYPE_COOP)?.addValidators(Validators.required)
      }
    })          //value change renvoie observable (donc sub) du type du form (particulier ou coop)  ATTENTION si pas de valeur retournée (tab vide), null dans le setvalue
  }


  // FORMULAIRE
  private generateForm(): FormGroup {
    const myForm = this.fb.group({
      [InscriptionFormProperties.TYPE_USER]: [TypeProfil.PARTICULIER, [Validators.required]],
      [InscriptionFormProperties.TYPE_COOP]: [null],
      [InscriptionFormProperties.NOM]: [null, [Validators.minLength(2), Validators.required]],                      // 1er élem= valeur par défaut, 2ème = objet avec param (validators etc) //pas obligé de mettre validators (2eme elem)  
      [InscriptionFormProperties.EMAIL]: [null, [Validators.email, Validators.required]],
      [InscriptionFormProperties.PASSWORD]: [null, [Validators.required, Validators.minLength(6)]],
      [InscriptionFormProperties.CONFIRMPASSWORD]: [null, [Validators.required, Validators.minLength(6)]],
    })
    return myForm;
  }


  // AFFICHER TYPES DE COOP SI COOPERATIVE
  AfficherTypesCoop(type: boolean) {
    this.isCoop = type
  }


  // PIPE TAKEUNTIL plus besoin car via pipe html

  // RECUPERER TYPES DE COOP DEPUIS LA DB
  // private getTypesCoopData() {
  //   this.serviceCoop.getTypesCoop().pipe(takeUntil(this.destroy$)).subscribe((response) => {
  //     this.typesCoopData = response
  //   });
  // }



  ngOndestroy(): void {         //next: émet une valeur (void: rien)
    this.destroy$.next()
  }

  // CREER PROFIL
  createProfile(){
    
    const newProfile : Profile = {
    typeUser: this.myForm.get(InscriptionFormProperties.TYPE_USER)?.value,
    typeCoop: this.myForm.get(InscriptionFormProperties.TYPE_COOP)?.value,
    name: this.myForm.get(InscriptionFormProperties.NOM)?.value,
    email: this.myForm.get(InscriptionFormProperties.EMAIL)?.value,
    password:this.myForm.get(InscriptionFormProperties.PASSWORD)?.value
    }
    
    this.serviceCoop.newUser(newProfile).subscribe(response => console.log(response)
    )

  }

}