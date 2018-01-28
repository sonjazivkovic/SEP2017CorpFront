import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-napravi-nalog',
  templateUrl: './napravi-nalog.component.html',
  styleUrls: ['./napravi-nalog.component.css']
})
export class NapraviNalogComponent implements OnInit {

  napraviNalogForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.napraviNalogForm = new FormGroup({
      'email': new FormControl(null),
      'korisnickoIme': new FormControl(null),
      'lozinka': new FormControl(null),
      'ponovoLozinka': new FormControl(null),
    });
  }
  onSubmit() {
    console.log(this.napraviNalogForm);
  }
}
