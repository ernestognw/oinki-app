import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { UserdataService } from './userdata.service';

@Injectable()
export class BalancedataService {
  currentUser: any = {};
  uid = null;
  totalAmount = null;

  constructor(private afDB: AngularFireDatabase, private userdataService: UserdataService) {
  }

  public incomeRecord(income) {
    this.uid = this.userdataService.getUserData().uid;
    // var totalAmount is retrieves null
    // when something is changed manually in Firebase Databse
    this.currentUser = this.userdataService.getProfileData(this.uid)
      .valueChanges().subscribe(profile => {
        this.totalAmount = profile;
        this.totalAmount = this.totalAmount.app_data.income.totalIncome;
      });
      console.log(this.totalAmount);
      this.totalAmount = this.totalAmount + income.quantity;
      this.afDB.database.ref('users/' + this.uid + '/app_data/income/' + income.id).set(income);
      this.afDB.database.ref('users/' + this.uid + '/app_data/income/totalIncome').set(this.totalAmount);
    alert('Ingreso registrado correctamente');
  }

  public expensesRecord(expenses) {
    this.uid = this.userdataService.getUserData().uid;
    // var totalAmount is retrieves null
    // when something is changed manually in Firebase Databse
    this.currentUser = this.userdataService.getProfileData(this.uid)
      .valueChanges().subscribe(profile => {
        this.totalAmount = profile;
        this.totalAmount = this.totalAmount.app_data.expenses.totalExpenses;
      });
    console.log(this.totalAmount);
    this.totalAmount = this.totalAmount + expenses.quantity;
    this.afDB.database.ref('users/' + this.uid + '/app_data/expenses/' + expenses.id).set(expenses);
    this.afDB.database.ref('users/' + this.uid + '/app_data/expenses/totalExpenses').set(this.totalAmount);
    alert('Gasto registrado correctamente');
  }

  public getBalance() {
    // this.uid = this.userdataService.getUserData().uid;
    return this.afDB.object('users/XPiNjjWLBmfGTffQPE0vXIW56wz1/app_data/');
  }

}
