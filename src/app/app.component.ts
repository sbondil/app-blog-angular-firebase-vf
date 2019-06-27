import {Component} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app-blog-angular';

constructor() {
  const firebaseConfig = {
    apiKey: 'AIzaSyBD4nU47MFLI9cGzDGhdZAmlgedLwsoudI',
    authDomain: 'angularappblog.firebaseapp.com',
    databaseURL: 'https://angularappblog.firebaseio.com',
    projectId: 'angularappblog',
    storageBucket: '',
    messagingSenderId: '780229981827',
    appId: '1:780229981827:web:e9f60d685dcde27b'
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

}

