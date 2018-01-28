import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import { SelectItem } from 'primeng/components/common/selectitem';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-putno-osiguranje',
  templateUrl: './putno-osiguranje.component.html',
  styleUrls: ['./putno-osiguranje.component.css']
})
export class PutnoOsiguranjeComponent implements OnInit {
  @ViewChild(NgForm) form;

  @Output() prikaziFormeKorisnika = new EventEmitter();
  @Output() posaljiBrojFormiKorisnika = new EventEmitter<number>();
  regions: string[] = ['Afrika', 'Azija', 'Evropa', 'Amerika', 'Australija'];
  filteredRegions: any[];
  region: string;
  sports: string[] = ['Fudbal', 'Kosarka', 'Tenis', 'Odbojka'];
  iznosi: string[] = ['100000', '200000', '300000'];
  filteredSports: any[];
  filteredIznos: any[];
  sport: string;
  iznosDo: string;
  starost: SelectItem[];
  starostOsoba: string;
  checkedSport: false;
  brojOsoba = 1;
  trajanje: number;
  prethodniBrojOsoba = 0;


  constructor() {
    this.starost = [];
    this.starost.push({label: 'Do 18', value: '18'});
    this.starost.push({label: '18-60', value: '18-60'});
    this.starost.push({label: '60+', value: '60+'});
  }


  showNextForm() {
    $('#korisnik').removeClass('no-display');
    this.scrollToElement('#korisnik');
    $('#putno-osiguranje').animate({
      height: 'toggle'
    }, 290, function() {
    });
    $('#show-insurance-details').removeClass('no-display');
    this.prikaziFormeKorisnika.emit(null);
    if (this.prethodniBrojOsoba === 0 || this.prethodniBrojOsoba !== this.brojOsoba) {
       this.posaljiBrojFormiKorisnika.emit(this.brojOsoba);
       this.prethodniBrojOsoba = this.brojOsoba;
    }
  }

  scrollToElement(id) {
    $('html, body').animate({
      scrollTop: $(id).offset().top
    }, 1000);
  }
  showSportList() {
    if (this.checkedSport) {
      $('#sport').removeClass('no-display');
    } else {
      $('#sport').addClass('no-display');
    }
  }
  filterRegions(event) {
    this.filteredRegions = [];
    for (let i = 0; i < this.regions.length; i++) {
      const brand = this.regions[i];
      if (brand.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
        this.filteredRegions.push(brand);
      }
    }
  }
  filterSports(event) {
    this.filteredSports = [];
    for (let i = 0; i < this.sports.length; i++) {
      const item = this.sports[i];
      if (item.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
        this.filteredSports.push(item);
      }
    }
  }
  filterIznos(event) {
    this.filteredIznos = [];
    for (let i = 0; i < this.iznosi.length; i++) {
      const item = this.iznosi[i];
      if (item.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
        this.filteredIznos.push(item);
      }
    }
  }

  ngOnInit() {
  }

}
