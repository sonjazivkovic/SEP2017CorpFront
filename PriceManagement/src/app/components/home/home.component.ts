import {Component, OnInit, ViewChild} from '@angular/core';
import {AutoOsiguranjeNoveCeneComponent} from '../auto-osiguranje-nove-cene/auto-osiguranje-nove-cene.component';
import { PutnoOsiguranjeNoveCeneComponent } from '../putno-osiguranje-nove-cene/putno-osiguranje-nove-cene.component';
import { StambenoOsiguranjeNoveCeneComponent } from '../stambeno-osiguranje-nove-cene/stambeno-osiguranje-nove-cene.component';
import { OsiguranjeService } from '../../services/osiguranje.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild(AutoOsiguranjeNoveCeneComponent) autoOsiguranjeComponent: AutoOsiguranjeNoveCeneComponent;
  @ViewChild(PutnoOsiguranjeNoveCeneComponent) putnoOsiguranjeComponent: PutnoOsiguranjeNoveCeneComponent;
  @ViewChild(StambenoOsiguranjeNoveCeneComponent) stambenoOsiguranjeComponent: StambenoOsiguranjeNoveCeneComponent;

  data: any = [];

  constructor(private osiguranjeService: OsiguranjeService) { }

  ngOnInit() {
  }
  izmeniCene() {
    this.data = [];
    this.data.push({ 'PutnoOsiguranje' : this.putnoOsiguranjeComponent.putnoOsiguranjeForm.value });
    this.data.push({ 'AutoOsiguranje' : this.autoOsiguranjeComponent.autoOsiguranjeForm.value });
    this.data.push( { 'StambenoOsiguranje' : this.stambenoOsiguranjeComponent.stambenoOsifuranjeForm.value });
    console.log(this.data);
    this.osiguranjeService.posaljiNoveCeneOsiguranja(this.data)
      .subscribe(response => console.log(response));
  }
}
