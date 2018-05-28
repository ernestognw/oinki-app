import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase/app';

@Injectable()
export class UserdataService {
  API_ENDPOINT = 'https://oinkiimx.firebaseio.com/';
  showbars = true;
  currentUser: any = {};
  uid = null;
  balance: any = {};
  loggedIn: boolean;
  listaIngresos = null;
  listaGastos = null;
  editListaIngresos = [];
  editListaGastos = [];
  oldValueGastos = [];
  oldValueIngresos = [];

  constructor(
    private afDB: AngularFireDatabase,
    private router: Router,
    private angularFireAuth: AngularFireAuth,
  ) {
    // Set Dashboard Balance Info
    this.setBalanceToZero();
    this.setRecordsToNull();
    this.isLogged()
    .subscribe(result => {
      if (result && result.uid) {
        this.currentUser = this.getUserData();
        this.uid = this.currentUser.uid;
        this.getBalance(this.uid)
        .valueChanges().subscribe(balance => {
          this.setBalanceToUserData(balance);
        });

        // Set savings records
        this.getRegistroIngresos(this.uid)
            .valueChanges().subscribe(registro => {
                console.log(registro);
                this.listaIngresos = registro;
                let i = 0;
                this.listaIngresos.forEach(element => {
                    this.editListaIngresos[i] = false;
                    this.oldValueIngresos[i] = 0;
                    this.oldValueGastos[i] = 0;
                    i++;
                });
                console.log(this.editListaGastos);
        });
        this.getRegistroGastos(this.uid)
            .valueChanges().subscribe(registro => {
                console.log(registro);
                this.listaGastos = registro;
                let i = 0;
                this.listaGastos.forEach(element => {
                    this.editListaGastos[i] = false;
                    i++;
                });
                console.log(this.editListaGastos);
        });
      } else {
      }
    }, (error) => {
        this.setBalanceToZero();
    });
  }

  public facebookLogin() {
    this.angularFireAuth.auth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(result => {
        this.showbars = true;
        console.log(result);
        alert('Usuario loggeado con Facebook');
        if (result.additionalUserInfo.isNewUser) {
          this.saveNewUserData(result);
        }
        this.router.navigate(['dashboard']);
      })
      .catch(error => {
        console.log(error);
      });
  }

  public isLogged() {
    return this.angularFireAuth.authState;
  }

  public logout() {
    this.angularFireAuth.auth.signOut();
    alert('Sesión cerrada');
    this.router.navigate(['dashboard']);
    this.balance.totalSavings = 0;
    this.setBalanceToZero();
    this.setRecordsToNull();
  }

  public getUserData() {
    return this.angularFireAuth.auth.currentUser;
  }

  public getProfileData(id) {
    return this.afDB.object('users/' + id);
  }

  public barsOrNot() {
    if (this.router.url === '/login') {
      this.showbars = false;
    } else {
      this.showbars = true;
    }
  }

  public getBalance(uid) {
    return this.afDB.object('users/' + uid + '/app_data/');
  }


  // Private Functions

  private setBalanceToZero() {
    this.balance.totalSavings = 0;
    this.balance.income = {
      totalIncome: 0,
    },
    this.balance.expenses = {
      totalExpenses: 0,
    };
  }

  private setRecordsToNull() {
      this.listaGastos = null;
      this.listaIngresos = null;
      this.editListaGastos = [];
      this.editListaIngresos = [];
  }

  private setBalanceToUserData(balance) {
    balance.totalSavings =
    balance.income.totalIncome -
    balance.expenses.totalExpenses;
    this.balance = balance;
  }

  private saveNewUserData(result) {
    result.additionalUserInfo.profile.app_data = {
      income: {
        totalIncome: 0
      },
      expenses: {
        totalExpenses: 0
      }
    },
    result.additionalUserInfo.profile.uid = result.user.uid;
    result.additionalUserInfo.profile.app_data.totalSavings = 0;
    this.afDB.database.ref('users/' + result.user.uid).set(result.additionalUserInfo.profile);
  }

  private getRegistroIngresos(uid) {
    return this.afDB.list('users/' + uid + '/app_data/income');
  }

  private getRegistroGastos(uid) {
    return this.afDB.list('/users/' + uid + '/app_data/expenses/');
  }
}
