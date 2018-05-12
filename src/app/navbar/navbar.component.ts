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
  loggedIn: boolean;
  currentUser: any;
  id = null;

  constructor(location: Location, private userdataService: UserdataService) {
    this.location = location;
    this.userdataService.isLogged()
    .subscribe((result) => {
      if (result && result.uid) {
        this.loggedIn = true;
        this.currentUser = this.userdataService.getUserData();
        this.id = this.currentUser.uid;
      } else {
        this.loggedIn = false;
      }
    }, (error) => {
      this.loggedIn = false;
    });
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
