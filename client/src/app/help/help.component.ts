import { Component } from '@angular/core';
import {FAQ} from './faq';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent {
  faq = FAQ;
}
