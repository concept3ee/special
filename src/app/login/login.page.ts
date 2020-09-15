import { Component } from '@angular/core';
import * as firebase from 'firebase';
import {ToastController, NavController} from '@ionic/angular';
import { FeedPage } from '../feed/feed.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class loginPage {

email: string = "";
password: string = "";
 
  navCtrl: any;
  nav: any;


  constructor(private toastController: ToastController, private router :Router) {


  }
  login(){
    console.log(this.email);
    firebase.auth().signInWithEmailAndPassword(this.email, this.password)
    .then(async (user) => {
      console.log(user)

      const toast = await this.toastController.create({
        message: "welcome " + user.user.displayName,
        duration: 3000
      
      });
      toast.present();
      
    this.router.navigateByUrl("/feed");
    
     

    }).catch(async (err) => {
      console.log(err)
      const toast = await this.toastController.create({
        message: err.message,
        duration: 3000
      
      });
      toast.present();
    })

  }

}
