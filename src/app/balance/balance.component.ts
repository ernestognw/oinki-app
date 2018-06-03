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
  constructor(public userdataService: UserdataService, private afDB: AngularFireDatabase, private balancedataService: BalancedataService) {
  }

  ngOnInit() {}

  saveOldValueIngresos(i, value, concept) {
    this.balancedataService.saveOldValueIngresos(i, value, concept);
  }

  saveOldValueGastos(i, value, concept) {
    this.balancedataService.saveOldValueGastos(i, value, concept);
  }

  editRecordIngresos(i) {
    this.balancedataService.editIncomeRecord(i);
  }

  editRecordGastos(i) {
    this.balancedataService.editExpensesRecord(i);
  }

  removeIncomeRecord(i) {
    this.balancedataService.removeIncomeRecord(i);
  }

  removeExpenseRecord(i) {
      this.balancedataService.removeExpenseRecord(i);
  }
}
