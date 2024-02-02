import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { HotelCardComponent } from './hotel-card/hotel-card.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, HotelCardComponent, ModalComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, FooterComponent, HotelCardComponent],
})
export class HelpersModule {}
