import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { UserdataService } from './userdata.service';

@Injectable()
export class BalancedataService {

  constructor(private afDB: AngularFireDatabase, private userdataService: UserdataService) {
  }

  public incomeRecord(income) {
    const uid = this.userdataService.getUserData().uid;
    this.userdataService.balance.income.totalIncome = this.userdataService.balance.income.totalIncome + income.quantity;
    this.userdataService.balance.totalSavings = this.userdataService.balance.totalSavings + income.quantity;
    this.afDB.database.ref('users/' + uid + '/app_data/income/' + income.id).set(income);
    this.afDB.database.ref('users/' + uid + '/app_data/totalSavings').set(this.userdataService.balance.totalSavings);
    this.afDB.database.ref('users/' + uid + '/app_data/income/totalIncome').set(this.userdataService.balance.income.totalIncome);
    alert('Ingreso registrado correctamente');
  }

  public expensesRecord(expenses) {
    const uid = this.userdataService.getUserData().uid;
    this.userdataService.balance.expenses.totalExpenses = this.userdataService.balance.expenses.totalExpenses + expenses.quantity;
    this.userdataService.balance.totalSavings = this.userdataService.balance.totalSavings - expenses.quantity;
    this.afDB.database.ref('users/' + uid + '/app_data/expenses/' + expenses.id).set(expenses);
    this.afDB.database.ref('users/' + uid + '/app_data/totalSavings').set(this.userdataService.balance.totalSavings);
    this.afDB.database.ref('users/' + uid + '/app_data/expenses/totalExpenses').set(this.userdataService.balance.expenses.totalExpenses);
    alert('Gasto registrado correctamente');
  }

}

    // this.uid = this.userdataService.getUserData().uid;
    // // var totalAmount is retrieves null
    // // when something is changed manually in Firebase Databse
    // this.currentUser = this.userdataService.getProfileData(this.uid)
    //   .valueChanges().subscribe(profile => {
    //     this.totalAmount = profile;
    //     this.totalAmount = this.totalAmount.app_data.income.totalIncome;
    //   });
    //   console.log(this.totalAmount);
    //   this.totalAmount = this.totalAmount + income.quantity;
    //   this.afDB.database.ref('users/' + this.uid + '/app_data/income/' + income.id).set(income);
    //   this.afDB.database.ref('users/' + this.uid + '/app_data/income/totalIncome').set(this.totalAmount);
    // alert('Ingreso registrado correctamente');
