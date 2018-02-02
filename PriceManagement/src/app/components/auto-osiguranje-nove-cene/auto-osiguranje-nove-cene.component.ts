import { Component, OnInit } from '@angular/core';
import {Form, FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-auto-osiguranje-nove-cene',
  templateUrl: './auto-osiguranje-nove-cene.component.html',
  styleUrls: ['./auto-osiguranje-nove-cene.component.css']
})
export class AutoOsiguranjeNoveCeneComponent implements OnInit {

  public autoOsiguranjeForm: FormGroup;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.autoOsiguranjeForm = new FormGroup({
      AutoPaket: this.formBuilder.array([])
    });
    this.dodajTestPodatke();
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

  dodajTestPodatke() {
    const paket = [ { naziv: 'Slepovanje do odr km', cena: 200, id: 1 }, { naziv: 'Popravka do odr cene', cena: 150, id: 2 }, { naziv: 'Smestaj u hotelu', cena: 110, id: 3} ];
    const controlPaket: FormArray = this.autoOsiguranjeForm.get('AutoPaket') as FormArray;
    for (var i = 0; i < paket.length; i++) {
     controlPaket.push(this.dodajInput(paket[i].naziv, paket[i].cena, paket[i].id));
    }
  }

  onSubmit() {
    console.log(this.autoOsiguranjeForm);
  }

}
