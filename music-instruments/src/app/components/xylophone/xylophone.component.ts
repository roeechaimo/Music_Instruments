import { OnInit } from '@angular/core';
import { GetJson } from '../../services/GetJson.service';
import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
import { ON_OFF_ANIMATION } from '../../animations/on-off.animation';

@Component({
  selector: 'app-xylophone',
  templateUrl: 'xylophone.component.html',
  animations: [ON_OFF_ANIMATION]
})
export class XylophonerComponent implements OnInit {
  results;
  audio;
  keyboardKey;
  triggerStateName: string;

  constructor(private _getJson: GetJson) { }

  xylophoneKeys = [];

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.keyboardKey = event.key;
    let keyExists = this.xylophoneKeys.filter(xylophoneKey => {
      return this.keyboardKey === xylophoneKey.keyboard;
    });
    if (keyExists.length !== 0) {
      this.playNote(keyExists[0].id);
    } else {
      return false;
    }
  }

  playNote(index) {
    this.xylophoneKeys[index].state = this.xylophoneKeys[index].state === 'on' ? 'off' : 'on';
    this.audio = new Audio();
    this.audio.src = this.xylophoneKeys[index].audioLink;
    this.audio.play();
  }

  ngOnInit() {
    let xylophoneKeys;
    this._getJson.getDataFromJson("xylophone").then((res) => {
      xylophoneKeys = res;
      this.xylophoneKeys = xylophoneKeys["xylophone-keys"];
    });
  }
}
