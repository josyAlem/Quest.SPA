import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { DefaultComponent } from './default/default.component';
import { MainContentComponent } from './main-content/main-content.component';



@NgModule({
  declarations: [
    MainContentComponent,
    AdminComponent,
    DefaultComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MainContentComponent,
    AdminComponent,
    DefaultComponent
  ]
})
export class ContentModule { }
