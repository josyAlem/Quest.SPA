import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  mainMenus: any;
  extraMenus: any;
  constructor() { }


  ngOnInit(): void {
    this.mainMenus = [
      { name: "mainMenu1", icon: "folder", updated: "yes" },
      { name: "mainMenu2", icon: "folder", updated: "yes" },
      { name: "mainMenu3", icon: "folder", updated: "yes" },
      { name: "mainMenu4", icon: "folder", updated: "yes" },
      { name: "mainMenu5", icon: "folder", updated: "yes" },
    ];
    this.extraMenus = [
      { name: "extraMenu1", icon: "folder", updated: "yes" },
      { name: "extraMenu2", icon: "folder", updated: "yes" },
      { name: "extraMenu3", icon: "folder", updated: "yes" },
      { name: "extraMenu4", icon: "folder", updated: "yes" },
      { name: "extraMenu5", icon: "folder", updated: "yes" },
    ]
  }

}
