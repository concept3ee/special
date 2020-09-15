import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {ToastController} from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  name: string = "";
  email: string = "";
  password: string= "";
  constructor(private toastController: ToastController,private alertctrl: AlertController, private router :Router
    ) { }

  
  ngOnInit() {
  }
  signup() {
    console.log(this.name, this.email, this.password); 
    firebase.auth().createUserWithEmailAndPassword
    (this.email, this.password).then((data)=> {
     
      console.log(data);
      let newuser: firebase.User = data.user;
     newuser.updateProfile({
       displayName: this.name,
       photoURL: ""
     }).then (() => {
       console.log("profile updated");
       this.router.navigateByUrl("/feed");
       
     }).catch ((err) => {
       console.log(err)
     })
      
    }).catch(async (err) => {
      console.log(err);
      const toast = await this.toastController.create({
        message: err.message,
        duration: 3000
      
      });
      toast.present();
      
    })
  }

}
