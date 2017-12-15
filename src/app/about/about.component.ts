import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'about',
  styleUrls: ['./about.component.css', '../home/home.component.css'],
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
  tableData: any;
  dataHolder = {};

  constructor(private _http: Http) { }

  ngOnInit(): void {
    this._http.get('../../assets/data.json').map(res => res.json()).subscribe(response => {
      const convertedData = [];
      const convObj = {};
      for (let i = 0; i < response.length; i++) {
        let res = response[i]
        if (!convObj[res.name]) {
          convObj[res.name] = {};
        }
        convObj[res.name][res.category] = res.amount;
      }

      for (let key in convObj) {
        let data = convObj[key];
        data.name = key;
        convertedData.push(data);
      }

      this.tableData = convertedData
    });
  }
}
