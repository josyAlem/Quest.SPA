import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {  MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
   @Input() sideNav!: MatSidenav;
  constructor() { }

  ngOnInit(): void {
  }
  sideNavToggle(){
if(this.sideNav==null)
console.log("sideNav is null")
else{
    this.sideNav.mode="side";
    this.sideNav.toggle();
  }
}
}
