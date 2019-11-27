import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaceComponent } from './place/place.component';
import { WeatherComponent } from './weather/weather.component';
import { SocialComponent } from './social/social.component';
import { PhonePipe } from './phone.pipe';
import { PlacesFilterPipe } from './places-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PlaceComponent,
    WeatherComponent,
    SocialComponent,
    PhonePipe,
    PlacesFilterPipe    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }