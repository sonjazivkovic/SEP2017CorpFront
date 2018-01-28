import { Component, OnInit } from '@angular/core';
import {Form, FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-stambeno-osiguranje-nove-cene',
  templateUrl: './stambeno-osiguranje-nove-cene.component.html',
  styleUrls: ['./stambeno-osiguranje-nove-cene.component.css']
})
export class StambenoOsiguranjeNoveCeneComponent implements OnInit {

  stambenoOsifuranjeForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.stambenoOsifuranjeForm = new FormGroup({
      Povrsina: this.formBuilder.array([]),
      Starost: this.formBuilder.array([]),
      Vrednosti: this.formBuilder.array([]),
      TipOsiguranja: this.formBuilder.array([]),
      'datum': new FormControl(null)
    });
    this.dodajTestPodatke();
  }

  dodajInput(naziv, cena): FormGroup {
    return this.formBuilder.group({
      'naziv': new FormControl(naziv),
      'cena': new FormControl(cena)
    });
  }

  dodajTestPodatke() {
    const povrsina = [ { naziv: 'Do 20', cena: 110 }, { naziv: '20-50', cena: 200}, { naziv: 'Preko 50', cena: 250 } ];
    const starost = [ { naziv: 'Do 5', cena: 50 }, { naziv: '5-10', cena: 70 } ];
    const vrednosti = [ { naziv: 'Do 100000', cena: 120 }, { naziv: '100000-3000000', cena: 270 } ];
    const tipOsiguranja = [ { naziv: 'Pozar', cena: 60 }, { naziv: 'Kradja', cena: 70}, { naziv: 'Poplava', cena: 40 } ];

    const controlPovrsina: FormArray = this.stambenoOsifuranjeForm.get('Povrsina') as FormArray;
    const controlStarost: FormArray = this.stambenoOsifuranjeForm.get('Starost') as FormArray;
    const controlVrednosti: FormArray = this.stambenoOsifuranjeForm.get('Vrednosti') as FormArray;
    const controlTipOsiguranja: FormArray = this.stambenoOsifuranjeForm.get('TipOsiguranja') as FormArray;
    for (var i = 0; i < povrsina.length; i++) {
      controlPovrsina.push(this.dodajInput(povrsina[i].naziv, povrsina[i].cena));
    }
    for (var i = 0; i < starost.length; i++) {
      controlStarost.push(this.dodajInput(starost[i].naziv, starost[i].cena));
    }
    for (var i = 0; i < vrednosti.length; i++) {
      controlVrednosti.push(this.dodajInput(vrednosti[i].naziv, vrednosti[i].cena));
    }
    for (var i = 0; i < tipOsiguranja.length; i++) {
      controlTipOsiguranja.push(this.dodajInput(tipOsiguranja[i].naziv, tipOsiguranja[i].cena));
    }

  }
  promeniBoju(el) {
    $(el.srcElement).css('background-color', '#E0EFDE');
    console.log(el);
  }

  onSubmit() {
    console.log(this.stambenoOsifuranjeForm);
  }

}
