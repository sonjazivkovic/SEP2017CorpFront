import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as $ from 'jquery';
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
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { routes } from './app.routing';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { PutnoOsiguranjeComponent } from './components/putno-osiguranje/putno-osiguranje.component';
import { KorisnikComponent } from './components/korisnik/korisnik.component';
import { AutoOsiguranjeComponent } from './components/auto-osiguranje/auto-osiguranje.component';
import { VoziloComponent } from './components/vozilo/vozilo.component';


import { MainInsuranceService } from './services/main-insurance.service';
import { StambenoOsiguranjeComponent } from './components/stambeno-osiguranje/stambeno-osiguranje.component';
import { VlasnikStanaVozilaComponent } from './components/vlasnik-stana-vozila/vlasnik-stana-vozila.component';
import { StanComponent } from './components/stan/stan.component';
import { MyReactiveFormComponent } from './components/my-reactive-form/my-reactive-form.component';
import { LoginComponent } from './components/login/login.component';
import { NapraviNalogComponent } from './components/napravi-nalog/napravi-nalog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopMenuComponent,
    PutnoOsiguranjeComponent,
    KorisnikComponent,
    AutoOsiguranjeComponent,
    VoziloComponent,
    StambenoOsiguranjeComponent,
    VlasnikStanaVozilaComponent,
    StanComponent,
    MyReactiveFormComponent,
    LoginComponent,
    NapraviNalogComponent
  ],
  imports: [
    BrowserModule,
    routes,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AccordionModule,
    PanelModule,
    ButtonModule,
    RadioButtonModule,
    InputTextModule,
    SpinnerModule,
    AutoCompleteModule,
    SelectButtonModule,
    CheckboxModule
  ],
  providers: [
    MainInsuranceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
