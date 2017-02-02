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
  public noFilter: Array<any>;
  public hasFilter: boolean = false;
  public searchTerm: string = '';
  
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

        this.noFilter = this.feeds;//noFilter rece dados da lista
        loading.dismiss();

    });
  }


  itemSelected(url: string):void{
     let browser = new InAppBrowser(url, '_system');
  }

  // metodo para busca na lista
  filterItems(){
    this.feeds = this.noFilter.filter((item) => {
      console.log(item);
      return item.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
    });
  }



  doRefresh(refresher){
    this.http.get(this.url).map(res => res.json()).subscribe(data => {
        this.feeds = data.items;        
        console.log(this.feeds);

        this.noFilter = this.feeds;//noFilter rece dados da lista
        refresher.complete();
    });
  }

}
