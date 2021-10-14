import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  signupData: any
  constructor(
    public navCtrl : NavController,

  ) {
    this.signupData = {}
  }

  ngOnInit() {
  }
  
  login() {
    this.navCtrl.pop()
  }
}
