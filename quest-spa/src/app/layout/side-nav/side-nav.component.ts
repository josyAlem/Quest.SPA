import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, EventEmitter, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

    constructor() { }
   

  ngOnInit(): void {
  
  }

}
