import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MenuComponent } from './menu/menu.component';
import { TaulaDades } from './dades/dades.component';
import { PrincipalComponent } from './principal/principal.component';
import { GraficComponent } from './grafic/grafic.component';
import { FooterComponent } from './footer/footer.component';
import { NgChartsModule } from 'ng2-charts';
import { PipePersonalitzada, PipePersonalitzada2 } from './pipe-personalitzada';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TaulaDades,
    PrincipalComponent,
    GraficComponent,
    FooterComponent,
    PipePersonalitzada,
    PipePersonalitzada2
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MatTableModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
