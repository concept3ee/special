import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import * as moment from 'moment';
@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  text: string="";
  posts: any[] = [];
  constructor() { 
    this.getPosts();
  }

  ngOnInit() {
  }
getPosts(){
  this.posts = []
firebase.firestore().collection("posts").orderBy("created","desc").get().then((docs) => {
  docs.forEach((doc) => {
    this.posts.push(doc);
  })
  console.log(this.posts)

    }).catch((err) => {
    console.log(err)
}) 

}

  post(){

firebase.firestore().collection("posts").add({
text: this.text,
created: firebase.firestore.FieldValue.serverTimestamp(),
owner: firebase.auth().currentUser.uid,
owner_name: firebase.auth().currentUser.displayName
}).then((doc) =>{
  console.log(doc)
  this.getPosts()

}).catch((err) => {
  console.log(err)
})

  }
  ago(time){
let difference = moment(time).diff(moment());
return moment.duration(difference).humanize();

  }
}
