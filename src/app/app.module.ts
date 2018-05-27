import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import {
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatTooltipModule,
  } from '@angular/material';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { BalanceComponent } from './balance/balance.component';
import { LoginComponent } from './login/login.component';
import { UserdataService } from './services/userdata.service';
import { BalancedataService } from './services/balancedata.service';

export const firebaseConfig = {
  apiKey: 'AIzaSyA2pxoxjhqzfQymUyfRFEK2RSLQ6eP4EcQ',
    authDomain: 'oinkiimx.firebaseapp.com',
    databaseURL: 'https://oinkiimx.firebaseio.com',
    projectId: 'oinkiimx',
    storageBucket: 'oinkiimx.appspot.com',
    messagingSenderId: '1016216695880'
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    ProfileComponent,
    BalanceComponent,
    LoginComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,

    AppRoutingModule,

    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [UserdataService, BalancedataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
