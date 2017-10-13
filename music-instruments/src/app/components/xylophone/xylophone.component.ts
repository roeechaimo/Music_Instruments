import { OnInit } from '@angular/core';
import { GetJson } from '../../services/GetJson.service';
import { Component } from '@angular/core';
import { PlayNote } from '../../services/PlayNote.service';
import { ON_OFF_ANIMATION } from '../../animations/on-off.animation';

@Component({
  selector: 'app-xylophone',
  templateUrl: 'xylophone.component.html',
  animations: [ON_OFF_ANIMATION]
})
export class XylophonerComponent implements OnInit {

  results;  
  triggerStateName: string;

  constructor(private _getJson: GetJson, private _playNote: PlayNote) { }

  xylophoneKeys = [];

  setKeyboardKeys() {
    let activate = this._playNote.activate(this.xylophoneKeys);
    if (activate) {
      console.log(activate);
    } else {
      return false;
    }
  }

  playNote(index) {
    this._playNote.playNote(index);
  }

  ngOnInit() {
    let xylophoneKeys;
    this._getJson.getDataFromJson("xylophone").then((res) => {
      xylophoneKeys = res;
      this.xylophoneKeys = xylophoneKeys["xylophone-keys"];
      this.setKeyboardKeys();
    });
  }
}
