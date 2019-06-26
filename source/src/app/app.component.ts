import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'source';

  ngOnInit() {
    const firebaseConfig = {
      apiKey: "AIzaSyCwx1Mb0MSYxucea9v35Qms94F75zgTPP8",
      authDomain: "instagram-a5311.firebaseapp.com",
      databaseURL: "https://instagram-a5311.firebaseio.com",
      projectId: "instagram-a5311",
      storageBucket: "instagram-a5311.appspot.com",
      messagingSenderId: "849230738918",
      appId: "1:849230738918:web:768a3c6a5cd28500"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

}
