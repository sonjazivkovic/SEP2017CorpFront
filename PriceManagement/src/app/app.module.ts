import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AccordionModule } from 'primeng/components/accordion/accordion';
import { PanelModule } from 'primeng/components/panel/panel';
import { ButtonModule } from 'primeng/components/button/button';
import { RadioButtonModule } from 'primeng/components/radioButton/radioButton';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { SpinnerModule } from 'primeng/components/spinner/spinner';
import { AutoCompleteModule } from 'primeng/components/autocomplete/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectButtonModule } from 'primeng/components/selectbutton/selectbutton';
import { CheckboxModule } from 'primeng/components/checkbox/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as $ from 'jquery';
import { AppComponent } from './app.component';
import { InventarStavkiComponent } from './components/inventar-stavki/inventar-stavki.component';
import { routes } from './app.routing';
import { NoviCenovnikComponent } from './components/novi-cenovnik/novi-cenovnik.component';
import { PutnoOsiguranjeNoveCeneComponent } from './components/putno-osiguranje-nove-cene/putno-osiguranje-nove-cene.component';
import { AutoOsiguranjeNoveCeneComponent } from './components/auto-osiguranje-nove-cene/auto-osiguranje-nove-cene.component';
import { StambenoOsiguranjeNoveCeneComponent } from './components/stambeno-osiguranje-nove-cene/stambeno-osiguranje-nove-cene.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { HomeComponent } from './components/home/home.component';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { LoginComponent } from './components/login/login.component';
import { NapraviNalogComponent } from './components/napravi-nalog/napravi-nalog.component';
import { HttpClientModule } from '@angular/common/http';
import { InventarStavkiService } from './services/inventar-stavki.service';
import { OsiguranjeService } from './services/osiguranje.service';


@NgModule({
  declarations: [
    AppComponent,
    InventarStavkiComponent,
    NoviCenovnikComponent,
    PutnoOsiguranjeNoveCeneComponent,
    AutoOsiguranjeNoveCeneComponent,
    StambenoOsiguranjeNoveCeneComponent,
    TopMenuComponent,
    HomeComponent,
    LoginComponent,
    NapraviNalogComponent
  ],
  imports: [
    routes,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AccordionModule,
    CalendarModule,
    PanelModule,
    ButtonModule,
    RadioButtonModule,
    InputTextModule,
    SpinnerModule,
    AutoCompleteModule,
    SelectButtonModule,
    CheckboxModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ InventarStavkiService, OsiguranjeService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
