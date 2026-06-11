import { Component } from '@angular/core';
import {  FormControl, FormGroupDirective, NgForm, Validators, FormsModule, ReactiveFormsModule, FormGroup} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card'; 
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cadastro',
  imports:
    [MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatButtonModule],
  
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.scss',
})
  

export class Cadastro {

  form = new FormGroup({
    nome: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    cpf: new FormControl('', Validators.required), 
    telefone: new FormControl('', Validators.required),
    sexo: new FormControl('', Validators.required),
    nascimento: new FormControl('', Validators.required),
    cep: new FormControl('', Validators.required),
    endereco: new FormControl('', Validators.required),
    numero: new FormControl('', Validators.required),
    complemento: new FormControl('', Validators.required),
    cidade: new FormControl('', Validators.required),
    estado: new FormControl('', Validators.required)    
  });

  salvar() {
    console.log(this.form.value);
    this.form.reset();
  }
}
