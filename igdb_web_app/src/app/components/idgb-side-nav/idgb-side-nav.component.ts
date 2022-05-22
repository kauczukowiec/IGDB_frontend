import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-idgb-side-nav',
  templateUrl: './idgb-side-nav.component.html',
  styleUrls: ['./idgb-side-nav.component.scss']
})
export class IdgbSideNavComponent implements OnInit {

  sideNavsItems = ['Aktualności', 'Lista broni', 'O nas'];

  constructor() { }

  ngOnInit(): void {
  }

}
