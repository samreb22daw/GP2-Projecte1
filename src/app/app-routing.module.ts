import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaulaDades } from './dades/dades.component';
import { GraficComponent } from './grafic/grafic.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  { path: '', component:PrincipalComponent },
  { path: 'dades', component: TaulaDades},
  { path: 'grafic', component: GraficComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
