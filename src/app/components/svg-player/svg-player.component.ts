import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: '[svg-player]',
  templateUrl: './svg-player.component.svg',
  styleUrls: ['./svg-player.component.css']
})
export class SvgPlayerComponent  {

  @Input() playerName: string = "";
  @Input() color: string = "";
  @Input() x: number = 0;
  @Input() y: number = 0;



}
