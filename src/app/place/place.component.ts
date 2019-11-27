import { Component, OnInit, Input } from '@angular/core';
import { getMatInputUnsupportedTypeError } from '@angular/material';
import { IPlace } from 'src/mock/itemsData';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent {

  @Input()
  place:IPlace;

}
