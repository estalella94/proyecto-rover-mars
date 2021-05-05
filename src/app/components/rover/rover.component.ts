import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rover',
  templateUrl: './rover.component.html',
  styleUrls: ['./rover.component.scss'],
})
export class RoverComponent implements OnInit {

  constructor() { }

  @Input() orientation: 'N'|'S'|'E'| 'W'

  arrow;

  ngOnInit() {
  console.log('ARROW ORIENTATION', this.orientation);

  switch (this.orientation) {
  case 'N':{
  return this.arrow = 'arrow-up'
  }
  case 'S':{
  return this.arrow = 'arrow-down'
  }
  case 'E':{
  return this.arrow = 'arrow-forward'
  }
  case 'W':{

  return this.arrow = 'arrow-back'

  }


  }
  }
}
