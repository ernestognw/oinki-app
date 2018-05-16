import { Component, OnInit } from '@angular/core';
import {LocationStrategy, PlatformLocation, Location} from '@angular/common';
import { UserdataService } from './services/userdata.service';
import { BalancedataService } from './services/balancedata.service';

declare var $: any;

@Component ({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Oinkii';
  location: Location;

  constructor(location: Location, public userdataService: UserdataService, private balancedataService: BalancedataService) {
    this.location = location;

    this.userdataService.balance.totalSavings = 0;
      this.userdataService.balance.income = {
        totalIncome: 0,
      },
      this.userdataService.balance.expenses = {
        totalExpenses: 0,
      };
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
