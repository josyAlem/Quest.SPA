import { Component, Input, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import {  MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() sideNavToggle=new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }
  sideMenuBtnToggle(){
this.sideNavToggle.emit();

  }
}
