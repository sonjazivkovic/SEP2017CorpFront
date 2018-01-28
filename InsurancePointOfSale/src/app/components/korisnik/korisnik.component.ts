import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormArray, FormControl} from '@angular/forms';
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-korisnik',
  templateUrl: './korisnik.component.html',
  styleUrls: ['./korisnik.component.css']
})
export class KorisnikComponent implements OnInit {

  @ViewChild(NgForm) form;

  korisnikFormGroup: FormGroup;

  nosilacOsiguranja: false;

  brojac: number;
  razlika: number;
  constructor(private _formBuild: FormBuilder) { }

  ngOnInit() {
    this.korisnikFormGroup = this._formBuild.group({
      KorisnikInfo: this._formBuild.array([this.addRows()])
    });
  }

  addRows() {
    let group = this._formBuild.group({
      'ime': new FormControl(null),
      'prezime': new FormControl(null),
      'jmbg': new FormControl(null),
      'brojPasosa': new FormControl(null),
      'adresa': new FormControl(null),
      'brojTelefona': new FormControl(null),
      'nosilacOsiguranja': new FormControl(false),
      'email': new FormControl({value: null, disabled: true})
    });
    return group;
  }

  dodajFormuKorisnik(brojKorisnika) {
    const control: FormArray = this.korisnikFormGroup.get(`KorisnikInfo`) as FormArray;

    if (control.length !== brojKorisnika) {

      this.razlika = brojKorisnika - control.length;
      if (this.razlika > 0) {
        for (this.brojac = 0; this.brojac < this.razlika; this.brojac++) {
          control.push(this.addRows());
        }
      } else {
        for (this.brojac = 0; this.brojac < Math.abs(this.razlika); this.brojac++) {
          control.removeAt(-1);
        }
      }
    }
    console.log(control.value[0]);
  }

  oznaciUgovaracaOsiguranja(indeks) {

    const control: FormArray = this.korisnikFormGroup.get(`KorisnikInfo`) as FormArray;
  }

}
