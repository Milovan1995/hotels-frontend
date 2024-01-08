import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HotelsComponent } from './components/pages/hotels/hotels.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { HelpersModule } from './components/helpers/helpers.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HotelsComponent,
    ContactUsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HelpersModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
