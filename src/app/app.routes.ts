import { Routes } from '@angular/router';
import { Cadastro } from './cadastro/cadastro';
import { Consulta } from './consulta/consulta';

export const routes: Routes = [
    { path: '**', component: Cadastro},
    { path: 'cadastro', component: Cadastro },
    { path: 'consulta', component: Consulta}
];
