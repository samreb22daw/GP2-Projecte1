import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaulaDades } from './dades/dades.component';
import { FormulariComponent } from './formulari/formulari.component';
import { GraficComponent } from './grafic/grafic.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  { path: '', component:PrincipalComponent },
  { path: 'dades', component: TaulaDades},
  { path: 'grafic', component: GraficComponent},
  { path: 'formulari', component: FormulariComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
