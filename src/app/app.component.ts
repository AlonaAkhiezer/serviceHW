import { Component, Output, OnInit } from '@angular/core';
import { GetAPIService } from './get-api.service';
import { IProject } from './IProject';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ServiceHW';

  public searchTerm: string;

  public apis$: Observable<IProject[]>;

  public constructor(
    private getAPIService: GetAPIService
  ) {}

  public search(event: Event) {
    this.searchTerm = (event.target as HTMLInputElement).value;
  }

  public searchAPI() {
    this.searchTerm = this.searchTerm || 'angular';
    this.apis$ = this.getAPIService.getAPIs(this.searchTerm); 
  }
}