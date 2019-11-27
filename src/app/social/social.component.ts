import { Component, OnInit, Input } from '@angular/core';
import { ISocial } from 'src/mock/itemsData';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent {

  @Input()
  social: ISocial

}
