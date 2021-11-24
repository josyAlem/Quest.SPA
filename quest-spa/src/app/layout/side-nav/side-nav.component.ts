import { Component, OnInit } from "@angular/core";
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
    this.mainMenus = [
      { name: "mainMenu1", icon: "bookmark", routerLink: "auth" },
      { name: "mainMenu2", icon: "bookmark" },
      { name: "mainMenu3", icon: "bookmark" },
      { name: "mainMenu4", icon: "bookmark" },
      { name: "mainMenu5", icon: "bookmark" },
    ];
    this.extraMenus = [
      { name: "extraMenu1", icon: "bookmark" },
      { name: "extraMenu2", icon: "bookmark" },
      { name: "extraMenu3", icon: "bookmark" },
      { name: "extraMenu4", icon: "bookmark" },
      { name: "extraMenu5", icon: "bookmark" },
    ]
  }

}
