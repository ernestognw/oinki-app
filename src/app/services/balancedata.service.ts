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

  public editIncomeRecord(i) {
    if (this.userdataService.listaIngresos[i].quantity !== this.userdataService.oldValueIngresos[i]) {
        const uid = this.userdataService.getUserData().uid;

        this.userdataService.balance.income.totalIncome =
            this.userdataService.balance.income.totalIncome -
            this.userdataService.oldValueIngresos[i] +
            this.userdataService.listaIngresos[i].quantity;

        this.userdataService.balance.totalSavings =
            this.userdataService.balance.totalSavings -
            this.userdataService.oldValueIngresos[i] +
            this.userdataService.listaIngresos[i].quantity;

        this.afDB.database
        .ref('users/' + uid + '/app_data/income/' + this.userdataService.listaIngresos[i].id)
        .set(this.userdataService.listaIngresos[i]);
        alert('Ingreso editado con éxito');

        this.afDB.database.ref('users/' + uid + '/app_data/totalSavings').set(this.userdataService.balance.totalSavings);
        this.afDB.database.ref('users/' + uid + '/app_data/income/totalIncome').set(this.userdataService.balance.income.totalIncome);
    } else {
        alert('Cambio no realizado');
    }
    this.userdataService.editListaIngresos[i] = false;
  }

  public editExpensesRecord(i) {
    if (this.userdataService.listaGastos[i].quantity !== this.userdataService.oldValueGastos[i]) {
        const uid = this.userdataService.getUserData().uid;

        this.userdataService.balance.expenses.totalExpenses =
            this.userdataService.balance.expenses.totalExpenses -
            this.userdataService.oldValueGastos[i] +
            this.userdataService.listaGastos[i].quantity;

        this.userdataService.balance.totalSavings =
            this.userdataService.balance.totalSavings +
            this.userdataService.oldValueGastos[i] -
            this.userdataService.listaGastos[i].quantity;

        this.afDB.database
        .ref('users/' + uid + '/app_data/expenses/' + this.userdataService.listaGastos[i].id)
        .set(this.userdataService.listaGastos[i]);
        alert('Ingreso editado con éxito');

        this.afDB.database.ref('users/' + uid + '/app_data/totalSavings').set(this.userdataService.balance.totalSavings);
        // tslint:disable-next-line:max-line-length
        this.afDB.database.ref('users/' + uid + '/app_data/expenses/totalExpenses').set(this.userdataService.balance.expenses.totalExpenses);
    } else {
        alert('Cambio no realizado');
    }
    this.userdataService.editListaGastos[i] = false;
  }

  public saveOldValueIngresos(i, value) {
    this.userdataService.oldValueIngresos[i] = value;
    console.log(value);
    this.userdataService.editListaIngresos[i] = true;
  }

  public saveOldValueGastos(i, value) {
    this.userdataService.oldValueGastos[i] = value;
    console.log(value);
    this.userdataService.editListaGastos[i] = true;
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
