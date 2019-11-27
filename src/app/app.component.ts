import { Component, Output, OnInit } from '@angular/core';
import { IPlace, places, IWeather, ISocial } from 'src/mock/itemsData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'PlacesHW';

  public places: IPlace[] = places;

  @Output()
  public weather: IWeather;

  @Output()
  public social: ISocial;

  public currentPlace: IPlace;

  public placesTypes: string[];

  public selectedType:string;

  selectPlace(place: IPlace): void {
    this.weather = place.weather; 
    this.social = place.social_info;
    this.currentPlace = place;
  }

  public ngOnInit(){    
    this.initPlacesTypes();
    this.selectPlace(places[0]);
  }

  initPlacesTypes(): void{
    this.placesTypes = places.map(x => x.type);
    this.placesTypes = this.placesTypes.filter((v,i) => this.placesTypes.indexOf(v) === i);
    this.selectedType = this.placesTypes[0];
  }

  selectType(type: string): void{
    this.selectedType = type;
    this.selectPlace(this.places.filter((x) => x.type == type)[0]);
  }
}