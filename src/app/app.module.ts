import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { GetAPIService } from './get-api.service';
import { InterceptorService } from './interceptor.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BASE_URL, BASE_URL_TOKEN } from './config';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent
      ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    GetAPIService,
    {provide: BASE_URL_TOKEN, useValue: BASE_URL},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }