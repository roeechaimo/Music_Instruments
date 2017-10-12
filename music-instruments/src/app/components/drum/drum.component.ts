import { OnInit } from '@angular/core';
import { GetJson } from '../../services/GetJson.service';
import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
import { ON_OFF_ANIMATION } from '../../animations/on-off.animation';

@Component({
  selector: 'app-drum',
  templateUrl: 'drum.component.html',
  animations: [ON_OFF_ANIMATION]
})
export class DrumComponent implements OnInit {
  results;
  audio;
  keyboardKey;
  drumKeys = [];
  triggerStateName: string;

  constructor(private _getJson: GetJson) { }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.keyboardKey = event.key;
    let keyExists = this.drumKeys.filter(drumKey => {
      return this.keyboardKey === drumKey.keyboard;
    });
    if (keyExists.length !== 0) {
      this.playNote(keyExists[0].id);
    } else {
      return false;
    }
  }

  playNote(index) {
    this.drumKeys[index].state = this.drumKeys[index].state === 'on' ? 'off' : 'on';
    this.audio = new Audio();
    this.audio.src = this.drumKeys[index].audioLink;
    this.audio.play();
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
    });
  }

}