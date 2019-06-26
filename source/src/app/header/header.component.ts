import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggingIn: boolean = false;

  constructor() { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(userdata => {
      if(userdata && userdata.emailVerified) {
        this.isLoggingIn = true;
      } else {
        this.isLoggingIn = false;
      }
    })
  }

}
