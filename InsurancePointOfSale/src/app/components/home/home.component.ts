import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { KorisnikComponent } from '../korisnik/korisnik.component';
import { PutnoOsiguranjeComponent } from '../putno-osiguranje/putno-osiguranje.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild(KorisnikComponent) korisnikComponent: KorisnikComponent;
  @ViewChild(PutnoOsiguranjeComponent) putnoOsiguranjeComponent: PutnoOsiguranjeComponent;

  @ViewChild(KorisnikComponent)
  private koris: KorisnikComponent;

  prikaziAutoOsiguranje: false;
  prikaziStambenoOsiguranje: false;
  brojKorisnikFormi: number;

  constructor() { }

  showInsuranceDetails() {
    $('#putno-osiguranje').animate({
      height: 'toggle'
    }, 290, function() {
    });
    $('#show-insurance-details').addClass('no-display');
  }


  kupiOsiguranje() {
    console.log(this.korisnikComponent);
    console.log(this.putnoOsiguranjeComponent);
  }

  prikaziBrojFormiKorisnika(broj: number) {
    console.log(broj);
    this.brojKorisnikFormi = broj;
    this.koris.dodajFormuKorisnik(this.brojKorisnikFormi);
  }

  showRoadSafetyForm() {
    if (this.prikaziAutoOsiguranje) {
      $('#stambeno-osiguranje').removeClass('no-display');
      this.scrollToElement('#stambeno-osiguranje');
    } else {
      $('#stambeno-osiguranje').addClass('no-display');
      this.scrollToElement('#korisnik');
    }
  }
  showHomeInsuranceForm() {
    if (this.prikaziStambenoOsiguranje) {
      $('#auto-osiguranje').removeClass('no-display');
      this.scrollToElement('#auto-osiguranje');
    } else {
      $('#auto-osiguranje').addClass('no-display');
    }
  }
  scrollToElement(id) {
    $('html, body').animate({
      scrollTop: $(id).offset().top
    }, 1000);
  }

  ngOnInit() {
    this.brojKorisnikFormi = this.putnoOsiguranjeComponent.brojOsoba;
  }

}
