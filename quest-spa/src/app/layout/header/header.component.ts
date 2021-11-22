import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
   @Input() sidenav!: MatDrawer;
  constructor() { }

  ngOnInit(): void {
  }
  sideNavToggle(){

    this.sidenav.mode="side";
    this.sidenav.toggle();
  }
}
