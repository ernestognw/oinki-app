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
  loggedIn = null;
  id = null;

  constructor(
    private afDB: AngularFireDatabase,
    private router: Router,
    private angularFireAuth: AngularFireAuth,
  ) {
    this.isLogged();
  }

  public facebookLogin() {
    this.angularFireAuth.auth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(result => {
        this.showbars = true;
        console.log(result);
        alert('Usuario loggeado con Facebook');
        if (result.additionalUserInfo.isNewUser) {
          this.afDB.database
            .ref('users/' + result.user.uid)
            .set(result.additionalUserInfo.profile);
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
}
