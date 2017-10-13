import { OnInit } from '@angular/core';
import { GetJson } from '../../services/GetJson.service';
import { PlayNote } from '../../services/PlayNote.service';
import { Component } from '@angular/core';
import { ON_OFF_ANIMATION } from '../../animations/on-off.animation';

@Component({
  selector: 'app-drum',
  templateUrl: 'drum.component.html',
  animations: [ON_OFF_ANIMATION]
})
export class DrumComponent implements OnInit {
   
  drumKeys = [];
  triggerStateName: string;

  constructor(private _getJson: GetJson, private _playNote: PlayNote) { }

  setKeyboardKeys() {
    let activate = this._playNote.activate(this.drumKeys);
    if (activate) {
      console.log(activate);
    } else {
      return false;
    }
  }

  playNote(index) {
    this._playNote.playNote(index);
  }

  getClass(index) {
    return this.drumKeys[index].class;
  }

  checkIfClassExists(index, cls) {
    if (this.drumKeys[index].class.indexOf(cls) > -1) {
      return true;
    } else {
      return false;
    }
  }

  ngOnInit() {
    let drumKeys;
    this._getJson.getDataFromJson("drum").then((res) => {
      drumKeys = res;
      this.drumKeys = drumKeys["drum-keys"];
      this.setKeyboardKeys();
    });
  }

}
