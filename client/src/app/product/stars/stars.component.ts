import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnChanges {

  @Input() amount: number;
  @Input() max: number;
  private stars: boolean[];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.stars = Array(this.max).fill(false).map((v, i) => i < this.amount);
  }

}
