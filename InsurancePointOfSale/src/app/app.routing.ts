/**
 * Created by Sonja on 1/3/2018.
 */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StambenoOsiguranjeComponent } from './components/stambeno-osiguranje/stambeno-osiguranje.component';
import { PutnoOsiguranjeComponent } from './components/putno-osiguranje/putno-osiguranje.component';
import { KorisnikComponent } from './components/korisnik/korisnik.component';
import { AutoOsiguranjeComponent } from './components/auto-osiguranje/auto-osiguranje.component';
import { LoginComponent } from './components/login/login.component';
import { NapraviNalogComponent } from './components/napravi-nalog/napravi-nalog.component';

export const router: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'stambeno-osiguranje',
    component: StambenoOsiguranjeComponent
  },
  {
    path: 'putno-osiguranje',
    component: PutnoOsiguranjeComponent
  },
  {
    path: 'korisnik',
    component: KorisnikComponent
  },
  {
    path: 'auto-osiguranje',
    component: AutoOsiguranjeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'napraviNalog',
    component: NapraviNalogComponent
  }
]
export const routes: ModuleWithProviders = RouterModule.forRoot(router);
