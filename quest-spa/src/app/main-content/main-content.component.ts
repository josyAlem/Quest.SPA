import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  @ViewChild('sidenav') sideNavEl!: MatSidenav;
  constructor() { }


  ngOnInit(): void {
  }

  sideMenuToggle() {
    if (this.sideNavEl == null)
      console.log("sideNav is null")
    else {
      this.sideNavEl.mode = "side";
      this.sideNavEl.toggle();
    }
  }
}
