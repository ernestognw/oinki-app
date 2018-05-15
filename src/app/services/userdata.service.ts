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

  constructor(
    private afDB: AngularFireDatabase,
    private router: Router,
    private angularFireAuth: AngularFireAuth,
  ) {
    this.isLogged()
    .subscribe((result) => {
      if (result && result.uid) {
        this.loggedIn = true;
        this.currentUser = this.getUserData();
        this.uid = this.currentUser.uid;
      } else {
        this.loggedIn = false;
      }
    }, (error) => {
      this.loggedIn = false;
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

  public getBalance() {
    const user = this.getUserData();
    return this.afDB.object('users/' + 'hHZmDw4urnSPwBrv4QdF8BsSGLY2' + '/app_data/');
  }
}
