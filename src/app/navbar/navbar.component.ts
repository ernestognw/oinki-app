import { Component, OnInit } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { UserdataService } from '../services/userdata.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  location: Location;

  constructor(location: Location, private userdataService: UserdataService) {
    this.location = location;
  }

  logout() {
    this.userdataService.logout();
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
