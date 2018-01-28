import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-putno-osiguranje-nove-cene',
  templateUrl: './putno-osiguranje-nove-cene.component.html',
  styleUrls: ['./putno-osiguranje-nove-cene.component.css']
})
export class PutnoOsiguranjeNoveCeneComponent implements OnInit {

  putnoOsiguranjeForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.putnoOsiguranjeForm = new FormGroup({
      Region: this.formBuilder.array([]),
      Starost: this.formBuilder.array([]),
      Sport: this.formBuilder.array([]),
      Iznos: this.formBuilder.array([]),
      'datum': new FormControl(null)
    });
    this.ucitajRegione();
    this.ucitajSportove();
    this.ucitajStarosti();
    this.ucitajIznose();
  }

  promeniBoju(el) {
    $(el.srcElement).css('background-color', '#E0EFDE');
    console.log(el);
  }

  dodajInput(naziv, cena): FormGroup {
    return this.formBuilder.group({
      'naziv': new FormControl(naziv),
      'cena': new FormControl(cena)
  });
  }

  ucitajRegione() {
    const controlRegion: FormArray = this.putnoOsiguranjeForm.get('Region') as FormArray;
    const niz = [
      {
        naziv: 'Afrika',
        cena: 50
      },
      {
        naziv: 'Evropa',
        cena: 100
      },
      {
        naziv: 'Aazija',
        cena: 150
      }
    ];
    for (var i = 0; i < niz.length; i++) {
      controlRegion.push(this.dodajInput(niz[i].naziv, niz[i].cena));
    }
  }
  ucitajSportove() {
    const controlSport: FormArray = this.putnoOsiguranjeForm.get('Sport') as FormArray;
    const niz = [
      {
        naziv: 'Kosarka',
        cena: 100
      },
      {
        naziv: 'Tenis',
        cena: 200
      }
    ];
    for (var i = 0; i < niz.length; i++) {
      controlSport.push(this.dodajInput(niz[i].naziv, niz[i].cena));
    }
  }
  ucitajStarosti() {
    const controlStarost: FormArray = this.putnoOsiguranjeForm.get('Starost') as FormArray;
    const niz = [
      {
        naziv: 'Do 18',
        cena: 50
      },
      {
        naziv: '18-60',
        cena: 110
      }
    ];
    for (var i = 0; i < niz.length; i++) {
      controlStarost.push(this.dodajInput(niz[i].naziv, niz[i].cena));
    }
  }
  ucitajIznose() {
    const controliznos: FormArray = this.putnoOsiguranjeForm.get('Iznos') as FormArray;
    const niz = [
      {
        naziv: 'do 10000',
        cena: 130
      },
      {
        naziv: '10000-300000',
        cena: 180
      }
    ];
    for (var i = 0; i < niz.length; i++) {
      controliznos.push(this.dodajInput(niz[i].naziv, niz[i].cena));
    }
  }

  onSubmit() {
    console.log(this.putnoOsiguranjeForm);

  }
}
