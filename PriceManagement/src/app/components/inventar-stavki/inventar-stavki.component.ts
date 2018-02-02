import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { InventarStavkiService } from '../../services/inventar-stavki.service';

@Component({
  selector: 'app-inventar-stavki',
  templateUrl: './inventar-stavki.component.html',
  styleUrls: ['./inventar-stavki.component.css']
})
export class InventarStavkiComponent implements OnInit {

  inventarStavkiForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private inventarStavkiService: InventarStavkiService) { }

  ngOnInit() {
    this.inventarStavkiForm = new FormGroup({
      Sport: this.formBuilder.array([]),
      StarosnoDoba: this.formBuilder.array([]),
      PomocNaPutu: this.formBuilder.array([])
    });
  }

  ubaciInput(): FormGroup {
    return this.formBuilder.group({
      'naziv': new FormControl(null),
      'cena': new FormControl(null)
    });
  }

  /* U naredne tri metode dodajem nove inpute za sport, starosnu grupu i pomoc na putu */
  dodajSport() {
    const controlSport: FormArray = this.inventarStavkiForm.get('Sport') as FormArray;
    controlSport.push(this.ubaciInput());
  }
  dodajStarosnuGrupu() {
    const controlStarost: FormArray = this.inventarStavkiForm.get('StarosnoDoba') as FormArray;
    controlStarost.push(this.ubaciInput());
  }
  dodajPomocNaPutu() {
    const controlPomocNaPutu: FormArray = this.inventarStavkiForm.get('PomocNaPutu') as FormArray;
    controlPomocNaPutu.push(this.ubaciInput());
  }
  /* U naredne tri metode uklanjam nove inpute za sport, starosnu grupu i pomoc na putu, po indeksu*/
  obrisiNoviSportInput(index) {
    const controlSport: FormArray = this.inventarStavkiForm.get('Sport') as FormArray;
    controlSport.removeAt(index);
  }
  obrisiStarosnuGrupuInput(index) {
    const controlStarost: FormArray = this.inventarStavkiForm.get('StarosnoDoba') as FormArray;
    controlStarost.removeAt(index);
  }
  obrisiPomocNaPutuInput(index) {
    const controlPomocNaPutu: FormArray = this.inventarStavkiForm.get('PomocNaPutu') as FormArray;
    controlPomocNaPutu.removeAt(index);
  }
  onSubmit() {
    console.log(this.inventarStavkiForm);
    this.inventarStavkiService.posaljiNoveStavkeInventara(this.inventarStavkiForm.value)
      .subscribe(response => console.log(response));
  }
}
