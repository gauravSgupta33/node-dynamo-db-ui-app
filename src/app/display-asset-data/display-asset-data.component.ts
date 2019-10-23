import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-asset-data',
  templateUrl: './display-asset-data.component.html',
  styleUrls: ['./display-asset-data.component.css']
})
export class DisplayAssetDataComponent implements OnInit {

  cols = ['id', 'name', 'description', 'type', 'fuel_type', 'manufacturer'];
  assets: any[];

  constructor(private http: HttpClient, private route: ActivatedRoute) {
  }

  private subscriber: any;
  ngOnInit() {
    this.subscriber = this.route.params.subscribe(params => {

      this.http.get('/api/asset/listAll').subscribe((data: any) => {
        console.log(data.Items);
        this.assets = data.Items;
        // this.user = new UserInfoModel(data.customer);
      });
    });
  }

}
