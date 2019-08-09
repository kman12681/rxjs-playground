import { Component, OnInit } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-link',
  templateUrl: './home-link.component.html',
  styleUrls: ['./home-link.component.css']
})
export class HomeLinkComponent {
  home = faHome;

  constructor() {}
}
