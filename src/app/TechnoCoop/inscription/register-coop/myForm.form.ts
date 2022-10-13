import { FormBuilder, FormGroup, Validators } from "@angular/forms";
// import { AsyncCountryValidator } from "./validators/asyncCountry.validator";
// import { matchPasswordValidator } from "./validators/matchPassword.validator";
// import { nameValidator } from "./validators/name.validator";
import { HttpClient } from "@angular/common/http"



export function generateMyForm(fb : FormBuilder, httpC : HttpClient) : FormGroup{

    return fb.group(
    /*controls : */{

        email : ["", {
                        validators : [Validators.email, Validators.required]
                    }
                ],


        password : ["", {
                            validators : [Validators.required, Validators.minLength(6)]
                        }
                    ],

        Vpassword : ["",{
                            validators :  [Validators.required, Validators.minLength(6)]
                        }
                    ],
        
                })

}