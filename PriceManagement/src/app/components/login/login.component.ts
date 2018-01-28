import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'korisnickoIme': new FormControl(null),
      'lozinka': new FormControl(null)
    });
  }
  napraviNalog() {

  }
  onSubmit() {
    console.log(this.loginForm);
  }

}
