import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vlasnik-stana-vozila',
  templateUrl: './vlasnik-stana-vozila.component.html',
  styleUrls: ['./vlasnik-stana-vozila.component.css']
})
export class VlasnikStanaVozilaComponent implements OnInit {

  @Input() prikaziAdresu: boolean;
  constructor() { }

  ngOnInit() {
  }

}
