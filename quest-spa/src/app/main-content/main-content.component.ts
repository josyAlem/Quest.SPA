import { AfterViewInit, Component, Input, OnInit, Output } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit{
   sideNav_out!: MatSidenav;

  constructor() { }
 

  ngOnInit(): void {
  }
  sideNavInit(sideNav:MatSidenav){
this.sideNav_out=sideNav;
  }
}
