import { Component } from '@angular/core';
import { FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from "@angular/router";
import { NgxMaskDirective, provideNgxMask} from "ngx-mask"

@Component({
  selector: 'app-cadastro',
  imports: [MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    RouterLink,
    NgxMaskDirective],
  
  providers:[provideNgxMask({})],

  templateUrl: './cadastro.html',
  styleUrl: './cadastro.scss',
})


export class Cadastro {

  form = new FormGroup({

    nome: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),

    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),

    cpf: new FormControl('', Validators.required),
    telefone: new FormControl('', Validators.required),
    sexo: new FormControl(''),
    nascimento: new FormControl(''),
    cep: new FormControl('', Validators.required),
    endereco: new FormControl('', Validators.required),
    numero: new FormControl('', Validators.required),
    complemento: new FormControl(''),
    cidade: new FormControl('', Validators.required),
    estado: new FormControl('', Validators.required)
  });

  salvar() {
    console.log(this.form.value);
    this.form.reset();
  }
}
