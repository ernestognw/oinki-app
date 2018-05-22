import { Component, OnInit } from '@angular/core';
import { BalancedataService } from '../services/balancedata.service';
import { UserdataService } from '../services/userdata.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  amount: any = {};
  constructor(private balancedataService: BalancedataService, public userdataService: UserdataService) {
  }

  recordIncome() {
      this.amount.id = Date.now();
      this.balancedataService.incomeRecord(this.amount);
      this.amount = {};
  }

  recordExpenses() {
    this.amount.id = Date.now();
    this.balancedataService.expensesRecord(this.amount);
    this.amount = {};
  }

  ngOnInit() {
  }

}
