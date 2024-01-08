import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { HotelsComponent } from './hotels/hotels.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [HomeComponent, HotelsComponent, ContactUsComponent],
  imports: [CommonModule, PagesRoutingModule],
  exports: [HomeComponent, HotelsComponent, ContactUsComponent],
})
export class PagesModule {}
