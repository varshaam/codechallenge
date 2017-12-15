import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  tableData: any;
  dataHolder = {};

  constructor(private _http: Http) { }

  ngOnInit(): void {
    this._http.get('../../assets/data.json').map(res => res.json()).subscribe(res => {
      this.tableData = res;
    });
  }

  sortby(param: string) {
    this.dataHolder[param] = !this.dataHolder[param];

    this.tableData.sort((a, b) => {
      if (this.dataHolder[param]) {
        if (a[param] < b[param]) return -1;
        if (a[param] > b[param]) return 1;
      } else {
        if (a[param] < b[param]) return 1;
        if (a[param] > b[param]) return -1;
      }
    });

  }

}
