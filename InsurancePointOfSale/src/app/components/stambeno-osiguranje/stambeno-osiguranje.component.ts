import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
  selector: 'app-stambeno-osiguranje',
  templateUrl: './stambeno-osiguranje.component.html',
  styleUrls: ['./stambeno-osiguranje.component.css']
})
export class StambenoOsiguranjeComponent implements OnInit {

  numberOfDays: number;
  type: SelectItem[];
  selectedType: string;
  constructor() {
    this.type = [];
    this.type.push({label: 'Pozar', value: 'pozar'});
    this.type.push({label: 'Poplava', value: 'poplava'});
    this.type.push({label: 'Kradja', value: 'kradja'});
  }

  ngOnInit() {
  }

}
