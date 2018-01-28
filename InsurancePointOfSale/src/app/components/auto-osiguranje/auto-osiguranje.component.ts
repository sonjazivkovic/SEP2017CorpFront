import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/components/common/selectitem';


@Component({
  selector: 'app-auto-osiguranje',
  templateUrl: './auto-osiguranje.component.html',
  styleUrls: ['./auto-osiguranje.component.css']
})
export class AutoOsiguranjeComponent implements OnInit {

  paket: SelectItem[];
  izabranPaket: string;
  trajanje: number;
  constructor() {
    this.paket = [];
    this.paket.push({label: 'Šlepovanje do određene kilometraže', value: 'slepovanje'});
    this.paket.push({label: 'Popravka do određene cene', value: 'popravka'});
    this.paket.push({label: 'Smeštaj u hotelu do određenog broja dana', value: 'smestaj'});
    this.paket.push({label: 'Alternativni prevoz', value: 'prevoz'});
  }

  ngOnInit() {
  }

}
