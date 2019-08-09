import { Component, OnInit, Input } from '@angular/core';
import { faFileCode } from '@fortawesome/free-solid-svg-icons';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { faReddit } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-page-link',
  templateUrl: './page-link.component.html',
  styleUrls: ['./page-link.component.css']
})
export class PageLinkComponent implements OnInit {
  @Input() title: string;
  @Input() icon: any;
  @Input() page: string;

  constructor() {}

  ngOnInit() {
    switch (this.icon) {
      case 'stopWatch': {
        this.icon = faStopwatch;
        break;
      }
      case 'reddit': {
        this.icon = faReddit;
        break;
      }
      default: {
        this.icon = faFileCode;
      }
    }
  }
}
