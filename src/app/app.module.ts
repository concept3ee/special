import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import * as firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyAsMQWZYEPgu89Nu0mCbdgyw4c91CoQFKA",
  authDomain: "itconnect-c80c5.firebaseapp.com",
  databaseURL: "https://itconnect-c80c5.firebaseio.com",
  projectId: "itconnect-c80c5",
  storageBucket: "itconnect-c80c5.appspot.com",
  messagingSenderId: "321170723152",
  appId: "1:321170723152:web:ba84df5ac913e71ca31c55",
  measurementId: "G-6EYCQ65T87"
});
firebase.firestore().settings({
  timestampsInSnapshots:true
})

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot(),
     AppRoutingModule,
     AngularFireModule.initializeApp(environment.firebaseConfig),
     AngularFireAuthModule,
     AngularFireDatabaseModule,
     AngularFireStorageModule
    ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
