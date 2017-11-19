import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-loading-icon',
  templateUrl: './loading-icon.component.html',
  styleUrls: ['./loading-icon.component.css']
})
export class LoadingIconComponent implements OnInit {

  @Input() mini: boolean;

  constructor() { }

  ngOnInit() {
  }

}
