import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {OsiguranjeService} from "../../services/osiguranje.service";
import {StavkaOsiguranja} from "../../interfaces/StavkaOsiguranja";

@Component({
  selector: 'app-putno-osiguranje-nove-cene',
  templateUrl: './putno-osiguranje-nove-cene.component.html',
  styleUrls: ['./putno-osiguranje-nove-cene.component.css']
})
export class PutnoOsiguranjeNoveCeneComponent implements OnInit {

  public putnoOsiguranjeForm: FormGroup;
  data: any = [];

  constructor(private formBuilder: FormBuilder, private osiguranjeService: OsiguranjeService) { }

  ngOnInit() {
    this.getAllStavka();
    this.putnoOsiguranjeForm = new FormGroup({
      Region: this.formBuilder.array([]),
      Starost: this.formBuilder.array([]),
      Sport: this.formBuilder.array([]),
      Iznos: this.formBuilder.array([]),
      'datum': new FormControl(null)
    });
  }

  getAllStavka() {
    this.osiguranjeService.getAllStavkaOsiguranjaById('po')
      .subscribe(response => this.data = response,
        error => alert(error),
        () => this.ucitajPovrsinu(this.data));
  }

  ucitajPovrsinu(nizStavkeOsiguranja: StavkaOsiguranja[]) {
    const self = this;
    const controlRegion: FormArray = this.putnoOsiguranjeForm.get('Region') as FormArray;
    const controlSport: FormArray = this.putnoOsiguranjeForm.get('Sport') as FormArray;
    const controlStarost: FormArray = this.putnoOsiguranjeForm.get('Starost') as FormArray;
    const controliznos: FormArray = this.putnoOsiguranjeForm.get('Iznos') as FormArray;
    nizStavkeOsiguranja.forEach(function (stavka) {
      if (stavka.naziv === 'region') {
        stavka.vrednosti.forEach(function (vrednostStavke){
          controlRegion.push(self.dodajInput(vrednostStavke.vrednost, vrednostStavke.cena, vrednostStavke.id));
        });
      } else if (stavka.naziv === 'starost_osoba') {
        stavka.vrednosti.forEach(function (vrednostStavke) {
          controlSport.push(self.dodajInput(vrednostStavke.vrednost, vrednostStavke.cena, vrednostStavke.id));
        });
      } else if (stavka.naziv === 'sport') {
        stavka.vrednosti.forEach(function (vrednostStavke) {
          controlStarost.push(self.dodajInput(vrednostStavke.vrednost, vrednostStavke.cena, vrednostStavke.id));
        });
      } else if (stavka.naziv === 'iznos_do') {
        stavka.vrednosti.forEach(function (vrednostStavke) {
          controliznos.push(self.dodajInput(vrednostStavke.vrednost, vrednostStavke.cena, vrednostStavke.id));
        });
      }
    });
  }

  dodajInput(naziv, cena, id): FormGroup {
    return this.formBuilder.group({
      'naziv': new FormControl(naziv),
      'cena': new FormControl(cena),
      'id': new FormControl(id)
    });
  }

  promeniBoju(el) {
    $(el.srcElement).css('background-color', '#E0EFDE');
    console.log(el);
  }

  onSubmit() {
    console.log(this.putnoOsiguranjeForm);

  }
}
