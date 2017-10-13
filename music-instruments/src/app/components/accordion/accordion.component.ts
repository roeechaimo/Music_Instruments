import { OnInit } from '@angular/core';
import { GetJson } from '../../services/GetJson.service';
import { Component } from '@angular/core';
import { PlayNote } from '../../services/PlayNote.service';
import { ON_OFF_ANIMATION } from '../../animations/on-off.animation';
import { InstructionsComponent } from '../instructions/instructions.component';

@Component({
  selector: 'app-accordion',
  templateUrl: 'accordion.component.html',
  animations: [ ON_OFF_ANIMATION ]
})

export class AccordionComponent implements OnInit {

  url = '../../assets/';
  triggerStateName: string;

  constructor(private _getJson: GetJson, private _playNote: PlayNote) { }

  accordionKeys = [];

  setKeyboardKeys() {
    let activate = this._playNote.activate(this.accordionKeys);
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
    return this.accordionKeys[index].class;
  }

  ngOnInit() {
    let accordionKeys;
    this._getJson.getDataFromJson(this.url + "accordion.json").then((res) => {
      accordionKeys = res;
      this.accordionKeys = accordionKeys["accordion-keys"];
      this.setKeyboardKeys();
    });
  }
}
