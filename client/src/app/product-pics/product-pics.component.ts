import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-pics',
  templateUrl: './product-pics.component.html',
  styleUrls: ['./product-pics.component.css']
})
export class ProductPicsComponent implements OnInit {

  @Input() product: any;
  @Input() link: boolean;
  @Input() height: number = 500;

  constructor() { }

  ngOnInit() {
  }

}
