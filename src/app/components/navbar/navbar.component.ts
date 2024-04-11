import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { OutlineButtonComponent } from '../buttons/outline-button/outline-button.component';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    OutlineButtonComponent
  ],
  providers: [
    Location,
    { provide: LocationStrategy, useClass: PathLocationStrategy }
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  location: Location;
  constructor(location: Location) {
    this.location = location;
  }

  handleBack() {
    this.location.back();
  }
}
