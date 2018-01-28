import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements AfterViewInit {

  toggleClass() {
    $('.navbar-nav').children().removeClass('active');
    $(this).addClass('active');
  }
  constructor() { }
  ngAfterViewInit() {

  }

}
