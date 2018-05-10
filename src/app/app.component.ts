import { Component, OnInit } from '@angular/core';
import {LocationStrategy, PlatformLocation, Location} from '@angular/common';
import { UserdataService } from './services/userdata.service';

declare var $: any;

@Component ({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Oinkii';
  location: Location;
  loggedIn = false;
  currentUser = null;

  constructor(location: Location, private userdataService: UserdataService) {
    this.location = location;
    this.userdataService.isLogged()
    .subscribe((result) => {
      if (result && result.uid) {
        this.loggedIn = true;
        this.currentUser = userdataService.getUserData();
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
    $.getScript('../../../assets/js/material-dashboard.js');
    $.getScript('../../../assets/js/initMenu.js');
  }

  isMaps(path) {
    let titlee = this.location.prepareExternalUrl(this.location.path());
    titlee = titlee.slice( 1 );

    if (path === titlee) {
      return false;
    } else {
      return true;
    }
  }

}
