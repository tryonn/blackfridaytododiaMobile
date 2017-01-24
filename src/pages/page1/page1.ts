import { Component } from '@angular/core';

import { NavController, LoadingController } from 'ionic-angular';

import { Http } from '@angular/http';

import 'rxjs/add/operator/map';


@Component({
  selector: 'page-page1',

  templateUrl: 'page1.html'
})

export class Page1 {

  public feeds: Array<string>;
  
  private url: string = "https://www.reddit.com/new.json";

  constructor(public navCtrl: NavController, public http: Http, public loadingCtrl: LoadingController) {
    this.fetchContent();
  }

  fetchContent():void {
    let loading = this.loadingCtrl.create({
      content: 'Fetching content...'
    });

    loading.present();

    this.http.get(this.url).map(res => res.json()).subscribe(data => {
        this.feeds = data.data.children;        
        console.log(this.feeds);
        loading.dismiss();

    });
  }


  itemSelected(feed):void{
    alert(feed.data.url);
  }

}
