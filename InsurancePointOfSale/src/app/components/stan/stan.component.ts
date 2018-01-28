import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
  selector: 'app-stan',
  templateUrl: './stan.component.html',
  styleUrls: ['./stan.component.css']
})
export class StanComponent implements OnInit {
  povrsina: SelectItem[];
  izabranaPovrsina: string;
  starost: SelectItem[];
  izabranaStarost: string;
  procenjenaVrednost: SelectItem[];
  izabranaProcenjenaVrednost: string;

  constructor() {
    this.povrsina = [];
    this.povrsina.push({label: 'Do 25', value: '25'});
    this.povrsina.push({label: '25-40', value: '25-40'});
    this.povrsina.push({label: '40-70', value: '40-70'});
    this.povrsina.push({label: '70+', value: '70+'});
    this.starost = [];
    this.starost.push({label: 'Do 10', value: '10'});
    this.starost.push({label: '10-20', value: '10-20'});
    this.starost.push({label: '20-30', value: '20-30'});
    this.starost.push({label: '30+', value: '30+'});
    this.procenjenaVrednost = [];
    this.procenjenaVrednost.push({label: 'Do 5000e', value: '5000'});
    this.procenjenaVrednost.push({label: '5000e-10000e', value: '5000-10000'});
    this.procenjenaVrednost.push({label: '10000e-20000e', value: '10000-20000'});
    this.procenjenaVrednost.push({label: '20000e+', value: '20000+'});
  }

  ngOnInit() {
  }

}
