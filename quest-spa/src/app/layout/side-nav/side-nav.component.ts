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
      { name: "home", icon: "home", routerLink: "home" },
      { name: "Cart", icon: "bookmark", routerLink: "home/cart" },
      { name: "Profile", icon: "bookmark", routerLink: "profile" },
      { name: "Admin/Dashboard", icon: "bookmark", routerLink: "admin/dashboard" },
      { name: "Admin/Cart", icon: "bookmark", routerLink: "admin/cart" },
      { name: "Admin/Catalog", icon: "bookmark", routerLink: "admin/catalog" },
      { name: "Admin/report", icon: "bookmark", routerLink: "admin/report" },

    ];
    this.extraMenus = [
      { name: "login", icon: "bookmark", routerLink: "auth/login" },
      { name: "signup", icon: "bookmark", routerLink: "auth/signup" }
    ]
  }

}
