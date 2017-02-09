import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Page1 } from '../../pages/page1/page1';

/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  goToOrfetas() {
    this.navCtrl.setRoot(Page1);
  }

/*
  goToOrfetasFacebook() {
    this.navCtrl.setRoot(Page1);
  }

  goToDeixeDicasDeOrfetas() {
    this.navCtrl.setRoot(Page1);
  }

  goToSiteOficial() {
    this.navCtrl.setRoot(Page1);
  }  
  */
}
