import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../services/userdata.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { BalancedataService } from '../services/balancedata.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {
  constructor(public userdataService: UserdataService, private afDB: AngularFireDatabase, private balancedataService: BalancedataService) {}

  ngOnInit() {}

  saveOldValueIngresos(i, value) {
    this.balancedataService.saveOldValueIngresos(i, value);
  }

  saveOldValueGastos(i, value) {
    this.balancedataService.saveOldValueGastos(i, value);
  }

  editRecordIngresos(i) {
    this.balancedataService.editIncomeRecord(i);
  }

  editRecordGastos(i) {
    this.balancedataService.editExpensesRecord(i);
  }
}
