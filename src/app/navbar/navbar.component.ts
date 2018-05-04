import { Component, OnInit } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  location: Location;

  constructor(location: Location) {
    this.location = location;
  }

  ngOnInit() {
  }

  getTitle() {
    let title: string = this.location.prepareExternalUrl(this.location.path());
    if (title.charAt(0) === '#' && title.length > 2) {
      title = title.slice( 2 );
      return title;
    }
    return 'Dashboard';
  }

}
