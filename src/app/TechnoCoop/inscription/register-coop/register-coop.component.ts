import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { generateMyForm } from './myForm.form';

@Component({
  selector: 'app-register-coop',
  templateUrl: './register-coop.component.html',
  styleUrls: ['./register-coop.component.css']
})
export class RegisterCoopComponent implements OnInit {

  myFormValue! : {
    name : string,
    type: string,
    email : string,
    password : string,
  }
    
  myForm : FormGroup = generateMyForm(this.fb, this.httpC)

  constructor(
    private fb : FormBuilder,
    private httpC : HttpClient
  ) { }

  ngOnInit(): void {
  }

  sendForm(){

    if(this.myForm.status == "VALID")
    {

      this.myFormValue = { 
        name : this.myForm.value["name"],
        type : this.myForm.value["type"],
        email : this.myForm.value["email"],
        password : this.myForm.value["password"],
        
      }
    }
      
  }
}
