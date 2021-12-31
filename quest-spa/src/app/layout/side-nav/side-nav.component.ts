import { Component, OnInit } from "@angular/core";
import { headerMenu, mainMenu } from '../../app-nav-menu';
export interface sideNav {
  name: string,
  icon: string,
  routerLink?: string
}
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  mainMenus: sideNav[] = [];
  extraMenus: sideNav[] = [];
  constructor() { }


  ngOnInit(): void {
    this.initSideMenu();
  }

  initSideMenu() {
    this.mainMenus = mainMenu;
    this.extraMenus = headerMenu;
  }

}
