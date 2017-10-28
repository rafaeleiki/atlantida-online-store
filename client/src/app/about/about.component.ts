import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  founders = [
    { name: 'Guilherme Valarini', ra: '168891', picture: 'assets/img/guilherme.jpeg' },
    { name: 'Leila Zwanziger', ra: '171866', picture: 'assets/img/leila.jpeg' },
    { name: 'Rafael Eiki', ra: '176127', picture: 'assets/img/eiki.jpeg' },
    { name: 'Rafael Lamarques', ra: '176081', picture: 'assets/img/lamas.jpeg' },
    { name: 'Tales Lelo', ra: '177312', picture: 'assets/img/tales.jpeg' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
