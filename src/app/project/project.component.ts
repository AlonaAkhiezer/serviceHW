import { Component, OnInit, Input } from '@angular/core';
import { IAPIObj } from '../apiObj';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input()
  public item: IAPIObj

  constructor() { }

  ngOnInit() {
  }

}
