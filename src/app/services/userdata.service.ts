import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class UserdataService {
  API_ENDPOINT = 'https://oinkiimx.firebaseio.com/';

  constructor (private afDB: AngularFireDatabase, private router: Router, private angularFireAuth: AngularFireAuth) {
    this.isLogged();
   }

  public facebookLogin() {
  this.angularFireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider)
    .then((result) => {
      console.log(result);
      alert('Usuario loggeado con Facebook');
      this.afDB.database.ref('users/' + result.additionalUserInfo.profile.id).set(result.additionalUserInfo.profile);
      this.router.navigate(['dashboard']);
    })
    .catch((error) => {
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

}
