import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule} from '@angular/material/icon'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MenuComponent } from './menu/menu.component';
import { DadesComponent } from './dades/dades.component';
import { PrincipalComponent } from './principal/principal.component';
import { GraficComponent } from './grafic/grafic.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DadesComponent,
    PrincipalComponent,
    GraficComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
