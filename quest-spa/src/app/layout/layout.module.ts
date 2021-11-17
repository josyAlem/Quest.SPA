import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainContentComponent } from '../content/main-content/main-content.component';



@NgModule({
  declarations: [
   HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[HeaderComponent,
    FooterComponent]
})
export class LayoutModule { }
