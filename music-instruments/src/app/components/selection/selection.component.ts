import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetJson } from '../../services/GetJson.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-selection',
  templateUrl: 'selection.component.html'
})

export class SelectionComponent implements OnInit {

  constructor(private _getJson: GetJson, private _router: Router) { }


  url = '../../assets/';
  navigateUrl = '../';
  instruments;
  instrument;

  navigateToInstrument(selectedInstrument) {    
    this._router.navigate([this.navigateUrl + selectedInstrument]);
  }

  ngOnInit() {
    let data;
    this._getJson.getDataFromJson(this.url + "instruments.json").then((res) => {
      data = res;
      this.instruments = data["instruments"];
    });
  }
}
