import { Component, OnInit } from '@angular/core';
import {Form, FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {OsiguranjeService} from "../../services/osiguranje.service";
import {StavkaOsiguranja} from "../../interfaces/StavkaOsiguranja";

@Component({
  selector: 'app-stambeno-osiguranje-nove-cene',
  templateUrl: './stambeno-osiguranje-nove-cene.component.html',
  styleUrls: ['./stambeno-osiguranje-nove-cene.component.css']
})
export class StambenoOsiguranjeNoveCeneComponent implements OnInit {

  public stambenoOsifuranjeForm: FormGroup;
  povrsina: any = [];
  data: any = [];

  constructor(private formBuilder: FormBuilder, private osiguranjeService: OsiguranjeService) { }

  ngOnInit() {
    this.getAllStavka();
    this.stambenoOsifuranjeForm = new FormGroup({
      PovrsinaStana: this.formBuilder.array([]),
      StarostStana: this.formBuilder.array([]),
      VrednostiStana: this.formBuilder.array([]),
      TipOsiguranjaStan: this.formBuilder.array([])
    });

  }

  getAllStavka() {
    this.osiguranjeService.getAllStavkaOsiguranjaById('so')
      .subscribe(response => this.data = response,
        error => alert(error),
        () => this.ucitajPovrsinu(this.data));
  }

  ucitajPovrsinu(nizStavkeOsiguranja: StavkaOsiguranja[]) {
    const self = this;
    const controlPovrsina: FormArray = this.stambenoOsifuranjeForm.get('PovrsinaStana') as FormArray;
    const controlStarost: FormArray = this.stambenoOsifuranjeForm.get('StarostStana') as FormArray;
    const controlVrednosti: FormArray = this.stambenoOsifuranjeForm.get('VrednostiStana') as FormArray;
    const controlTipOsiguranja: FormArray = this.stambenoOsifuranjeForm.get('TipOsiguranjaStan') as FormArray;
    nizStavkeOsiguranja.forEach(function (stavka) {
      if (stavka.naziv === 'povrsina') {
        stavka.vrednosti.forEach(function (vrednostStavke){
          controlPovrsina.push(self.dodajInput(vrednostStavke.vrednost, vrednostStavke.cena, vrednostStavke.id));
        });
      } else if (stavka.naziv === 'starost_stana') {
        stavka.vrednosti.forEach(function (vrednostStavke) {
          controlStarost.push(self.dodajInput(vrednostStavke.vrednost, vrednostStavke.cena, vrednostStavke.id));
        });
      } else if (stavka.naziv === 'procenjena_vrednost') {
        stavka.vrednosti.forEach(function (vrednostStavke) {
          controlVrednosti.push(self.dodajInput(vrednostStavke.vrednost, vrednostStavke.cena, vrednostStavke.id));
        });
      } else if (stavka.naziv === 'osigurava_se_od') {
        stavka.vrednosti.forEach(function (vrednostStavke) {
          controlTipOsiguranja.push(self.dodajInput(vrednostStavke.vrednost, vrednostStavke.cena, vrednostStavke.id));
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
    console.log(this.stambenoOsifuranjeForm);
  }

}
