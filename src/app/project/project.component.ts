import { Component, OnInit, Input } from '@angular/core';
import { IProject } from '../IProject';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input()
  public item: IProject

  constructor() { }

  ngOnInit() {
  }

}
