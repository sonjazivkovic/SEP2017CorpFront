import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventarStavkiComponent } from './components/inventar-stavki/inventar-stavki.component';
import { AutoOsiguranjeNoveCeneComponent } from './components/auto-osiguranje-nove-cene/auto-osiguranje-nove-cene.component';
import { NoviCenovnikComponent } from './components/novi-cenovnik/novi-cenovnik.component';
import { PutnoOsiguranjeNoveCeneComponent } from './components/putno-osiguranje-nove-cene/putno-osiguranje-nove-cene.component';
import { StambenoOsiguranjeNoveCeneComponent } from './components/stambeno-osiguranje-nove-cene/stambeno-osiguranje-nove-cene.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NapraviNalogComponent } from './components/napravi-nalog/napravi-nalog.component';

export const router: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'inventarStavki',
    component: InventarStavkiComponent
  },
  {
    path: 'autoOsiguranjeNoveCene',
    component: AutoOsiguranjeNoveCeneComponent
  },
  {
    path: 'noviCenovnik',
    component: NoviCenovnikComponent
,  },
  {
    path: 'putnoOsiguranjeNoveCene',
    component: PutnoOsiguranjeNoveCeneComponent
  },
  {
    path: 'stambenoOsiguranjeNoveCene',
    component: StambenoOsiguranjeNoveCeneComponent
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
