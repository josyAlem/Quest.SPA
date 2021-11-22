import { AfterViewInit, Component, Input, OnInit, Output } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit{
   sideNav_out!: MatDrawer;

  constructor() { }
 

  ngOnInit(): void {
  }
  sideNavInit(sideNav:MatDrawer){
this.sideNav_out=sideNav;
  }
}
