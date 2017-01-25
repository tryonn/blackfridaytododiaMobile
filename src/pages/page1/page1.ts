import { Component } from '@angular/core';

import { NavController, LoadingController } from 'ionic-angular';

import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

import { InAppBrowser } from 'ionic-native';


@Component({
  selector: 'page-page1',

  templateUrl: 'page1.html'
})

export class Page1 {

  public feeds: Array<string>;
  
  //private url: string = "https://www.reddit.com/new.json";
  private url: string = "https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fblackfridaytododia.com%2Ffeed%2F";

  constructor(public navCtrl: NavController, public http: Http, public loadingCtrl: LoadingController) {
    this.fetchContent();
  }

  fetchContent():void {
    let loading = this.loadingCtrl.create({
      content: 'Fetching content...'
    });

    loading.present();

    this.http.get(this.url).map(res => res.json()).subscribe(data => {
        this.feeds = data.items;        
        console.log(this.feeds);
        loading.dismiss();

    });
  }


  itemSelected(url: string):void{
     let browser = new InAppBrowser(url, '_system');
  }

}
